![](/assets/IMX335-5MP-USB-Camera-A-details-1-removebg-preview.png)
# Low Latency Camera Streaming in Robotics
So as part of my work at Dreadnought Robotics and a few other places since, I've often had to grapple with and sort out why a camera stream is not performing as it should and this can have many reasons like purely from my experience I've seen things 

- like the USB / Ethernet cable being too fragile
    We needed to connect a USB camera that was under our bot to the main compute within the bot and the only entry was through a penetrator only designed for thinner ethernet wires and we also mostly had lots of high quality ethernet tether so we had to frankenstein a USB -> Ethernet -> USB setup. This worked on a good day but it was also very fragile
- the USB 2.0 cable being re-soldered so many times 
    it has to be re-twisted now and then to properly transmit data or the bandwidth drops and the framerate goes to like 3 or 5 from an expected 60 and if you didn't know about the cable issue you'd not figure it out
    The insulation had also been cut so the strands didnt have anything holding them together :) 

So this documents my research and I guess my frustration finding a "sort" of way to get a low latency camera stream working across multiple different setups with different compute, different architectures etc, My experience has mostly been with USB cameras (for the receiving frames side) but the publishing side will hold true for any camera.

So to fully illustrate how this entire pipeline works and to appreciate the complexity of cameras somewhat, I am going to go through the entire thing, It'll be a bit abstract at parts I am not super familiar but I'll try to be as in depth as I can

## How do digital cameras work

### Sensor / Bayer Filter
So the camera is made up of a grid of photo cells, these cells can only measure luminance, as in how bright the light hitting it is, this grid is then read either row by row (CCA) or each cell can be read individually (CMOS), Most cameras today follow the CMOS architecture since it easier and hence cheaper to manufacture.

But as you can imagine, a grid of luminence sensors isnt exactly sufficient to percieve colour so this is where colour filters come in. Unlike the human eye which has cones and rods for colour & luminence respectivley, Camera sensors need some way to filter the luminence they recieve to a particular colour spectrum, This is usually done with a bayer filter.

#COLUMNS
![bayer filter](https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Bayer_pattern_on_sensor.svg/1920px-Bayer_pattern_on_sensor.svg.png)
![human eye sensitivity](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Eyesensitivity.svg/1280px-Eyesensitivity.svg.png)
#END COLUMNS

This seperates the colours coming into the sensor, and since the pattern is repeated you can take the image from the sensor with the filter applied and "debayer" it to compute the R, G, B values for each pixel. (If you notice there are twice as many green spots on the filter compared to red & blue, because we percieve green more strongly than red or blue)

#f <h3>Image Signal Processor (ISP)</h3>
This isn't something you need to worry about with USB or Ethernet cameras since they have an integrated ISP that takes care of reading data from the camera sensor, debayering it etc and presenting it in a format you can easily consume (USB is usually V4l2 & Ethernet can be custom), But if you are dealing with MIPI CSI cameras then you need to worry about this, since then, the sensor is directly connected to your devboard and the devboards internal ISP must be configured to communicate with the camera sensor, which if not included in your devices kernel (Raspi thankfully supports majority), can end up with you needing to edit files that look like this:

```dtb
...
&{/} {
	clk_csi0_imx219_fixed: csi0-imx219-xclk {
		compatible = "fixed-clock";
		#clock-cells = <0>;
		clock-frequency = <24000000>;
	};
};

&mcu_gpio0 {
    status = "okay";
};

&main_i2c2 {
	status = "okay";
	pinctrl-names = "default";
	pinctrl-0 = <&main_i2c2_pins_default>;
	clock-frequency = <400000>;

	#address-cells = <1>;
	#size-cells = <0>;

	imx219_0: sensor@10 {
		compatible = "sony,imx219";
		reg = <0x10>;

		clocks = <&clk_csi0_imx219_fixed>;
		clock-names = "xclk";

		pinctrl-names = "default";
		pinctrl-0 = <&csi0_gpio_pins_default>;

		reset-gpios = <&mcu_gpio0 15 GPIO_ACTIVE_HIGH>;

		port {
			csi2_cam0: endpoint {
				remote-endpoint = <&csi2rx0_in_sensor>;
				link-frequencies = /bits/ 64 <456000000>;
				clock-lanes = <0>;
...
```

Suffice to say its a big hassle and when you need to handle it, it takes forever to properly integrate the camera hardware, especially if documentation is unsatisfactory

#END f

### Video4Linux (USB / Standards compliant cameras)
So this is the linux subsystem that is in charge of all video device aquistion, enumeration and handling on linux, It is what lets you configure the camera properties like exposure, auto focus etc and for this article most importantly it lets you query all the devices and shows you all the different streams it supports, a *stream* is just a valid configuration of FORMAT, RESOLUTION & FPS that the device **currently** supports and is capable of publishing.

[V4l2 Documentation](https://www.linuxtv.org/downloads/v4l-dvb-apis-new/userspace-api/v4l/v4l2.html)

So for example my laptop webcam supports the following:
```
$ v4l2-ctl --all
Driver Info:
        Driver name      : uvcvideo
        Card type        : Integrated Camera: Integrated C
        Bus info         : usb-0000:05:00.3-3
        Driver version   : 6.8.12
        Capabilities     : 0x84a00001
                Video Capture
                Metadata Capture
                Streaming
                Extended Pix Format
                Device Capabilities
        Device Caps      : 0x04200001
                Video Capture
                Streaming
                Extended Pix Format
Media Driver Info:
        Driver name      : uvcvideo
        Model            : Integrated Camera: Integrated C
        Serial           :
        Bus info         : usb-0000:05:00.3-3
        Media version    : 6.8.12
        Hardware revision: 0x00002510 (9488)
        Driver version   : 6.8.12
Interface Info:
        ID               : 0x03000002
        Type             : V4L Video
Entity Info:
        ID               : 0x00000001 (1)
        Name             : Integrated Camera: Integrated C
        Function         : V4L2 I/O
        Flags            : default
        Pad 0x01000007   : 0: Sink
          Link 0x02000013: from remote pad 0x100000a of entity 'Extension 4' (Video Pixel Formatter): Data, Enabled, Immutable
Priority: 2
Video input : 0 (Camera 1: ok)
Format Video Capture:
        Width/Height      : 1280/720
        Pixel Format      : 'MJPG' (Motion-JPEG)
        Field             : None
        Bytes per Line    : 0
        Size Image        : 1843200
        Colorspace        : sRGB
        Transfer Function : Rec. 709
        YCbCr/HSV Encoding: Rec. 709
        Quantization      : Default (maps to Full Range)
        Flags             :
Crop Capability Video Capture:
        Bounds      : Left 0, Top 0, Width 1280, Height 720
        Default     : Left 0, Top 0, Width 1280, Height 720
        Pixel Aspect: 1/1
Selection Video Capture: crop_default, Left 0, Top 0, Width 1280, Height 720, Flags:
Selection Video Capture: crop_bounds, Left 0, Top 0, Width 1280, Height 720, Flags:
Streaming Parameters Video Capture:
        Capabilities     : timeperframe
        Frames per second: 30.000 (30/1)
        Read buffers     : 0

User Controls

                     brightness 0x00980900 (int)    : min=0 max=255 step=1 default=128 value=128
                       contrast 0x00980901 (int)    : min=0 max=100 step=1 default=32 value=32
                     saturation 0x00980902 (int)    : min=0 max=100 step=1 default=64 value=64
                            hue 0x00980903 (int)    : min=-180 max=180 step=1 default=0 value=0
        white_balance_automatic 0x0098090c (bool)   : default=1 value=1
                          gamma 0x00980910 (int)    : min=90 max=150 step=1 default=120 value=120
           power_line_frequency 0x00980918 (menu)   : min=0 max=2 default=1 value=1 (50 Hz)
                                0: Disabled
                                1: 50 Hz
                                2: 60 Hz
      white_balance_temperature 0x0098091a (int)    : min=2800 max=6500 step=1 default=4600 value=4600 flags=inactive
                      sharpness 0x0098091b (int)    : min=0 max=7 step=1 default=3 value=3
         backlight_compensation 0x0098091c (int)    : min=0 max=2 step=1 default=1 value=1

Camera Controls

                  auto_exposure 0x009a0901 (menu)   : min=0 max=3 default=3 value=3 (Aperture Priority Mode)
                                1: Manual Mode
                                3: Aperture Priority Mode
         exposure_time_absolute 0x009a0902 (int)    : min=2 max=1250 step=1 default=156 value=156 flags=inactive
     exposure_dynamic_framerate 0x009a0903 (bool)   : default=0 value=1
                        privacy 0x009a0910 (bool)   : default=0 value=0 flags=read-only
```
