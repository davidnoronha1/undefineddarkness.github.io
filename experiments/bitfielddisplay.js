      class BinaryRibbon extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({ mode: 'open' });
                this.scrollInterval = null;
                
                // Default values
                this.colorSchemes = [
                    { name: 'Muted Grey', one: '#d0d0d0', zero: '#404040' },
                    { name: 'Blue Grey', one: '#b0c4de', zero: '#2f4f4f' },
                    { name: 'Warm Grey', one: '#d2b48c', zero: '#696969' },
                    { name: 'Cool Grey', one: '#c0c0c0', zero: '#708090' },
                    { name: 'Green Grey', one: '#9fbc9f', zero: '#556b2f' },
                    { name: 'Purple Grey', one: '#c8a2c8', zero: '#483d8b' }
                ];
                this.currentColorIndex = 0;
            }

            static get observedAttributes() {
                return ['text', 'width', 'pixel-size', 'one-color', 'zero-color', 'shape', 'auto-scroll', 'scroll-speed'];
            }

            connectedCallback() {
                this.render();
                this.createBinaryRibbon();
                this.ensureFixedPositioning();
                
                // Auto-scroll if enabled
                if (this.getAttribute('auto-scroll') === 'true') {
                    this.startScrolling();
                }

                // Add resize listener to maintain positioning
                this.resizeHandler = () => this.ensureFixedPositioning();
                window.addEventListener('resize', this.resizeHandler);
                
                // Add scroll listener to maintain positioning
                this.scrollHandler = () => this.ensureFixedPositioning();
                window.addEventListener('scroll', this.scrollHandler);
            }

            disconnectedCallback() {
                this.stopScrolling();
                if (this.resizeHandler) {
                    window.removeEventListener('resize', this.resizeHandler);
                }
                if (this.scrollHandler) {
                    window.removeEventListener('scroll', this.scrollHandler);
                }
            }

            ensureFixedPositioning() {
                // Force the component to stay fixed to the right side
                this.style.position = 'fixed';
                this.style.right = '0px';
                this.style.top = '0px';
                this.style.zIndex = '9999';
                this.style.height = '100vh';
            }

            attributeChangedCallback(name, oldValue, newValue) {
                if (oldValue !== newValue) {
                    this.render();
                    this.createBinaryRibbon();
                    
                    if (name === 'auto-scroll') {
                        if (newValue === 'true') {
                            this.startScrolling();
                        } else {
                            this.stopScrolling();
                        }
                    }
                }
            }

            render() {
                const width = this.getAttribute('width') || '100';
                const pixelSize = this.getAttribute('pixel-size') || '8';
                const oneColor = this.getAttribute('one-color') || '#d0d0d0';
                const zeroColor = this.getAttribute('zero-color') || '#404040';
                const shape = this.getAttribute('shape') || 'square';
                const borderRadius = shape === 'circle' ? '50%' : '0px';

                this.shadowRoot.innerHTML = `
                    <style>
                        :host {
                            position: fixed !important;
                            right: 0 !important;
                            top: 0 !important;
                            width: ${width}px;
                            height: 100vh;
                            background: ${this.getAttribute('background') || '#000'};
                            /* border-left: 3px solid #8b4513; */
                            z-index: 9999;
                            overflow: hidden;
                            padding: 5px;
                            box-sizing: border-box;
                            pointer-events: auto;
                        }

                        .binary-container {
                            width: 100%;
                            height: 100%;
                            overflow-y: auto;
                            scrollbar-width: none;
                            -ms-overflow-style: none;
                        }

                        .binary-container::-webkit-scrollbar {
                            display: none;
                        }

                        .binary-row {
                            display: flex;
                            margin-bottom: 2px;
                            justify-content: center;
                        }

                        .binary-pixel {
                            width: ${pixelSize}px;
                            height: ${pixelSize}px;
                            margin: 1px;
                            flex-shrink: 0;
                            border-radius: ${borderRadius};
                            transition: all 0.2s ease;
                        }

                        .binary-pixel.one {
                            background: ${oneColor};
                        }

                        .binary-pixel.zero {
                            background: ${zeroColor};
                        }

                        @media (max-width: 768px) {
                            :host {
                                width: ${Math.max(60, parseInt(width) * 0.75)}px;
                            }
                            
                            .binary-pixel {
                                width: ${Math.max(4, parseInt(pixelSize) * 0.75)}px;
                                height: ${Math.max(4, parseInt(pixelSize) * 0.75)}px;
                            }
                        }
                    </style>
                    <div class="binary-container"></div>
                `;
            }

            textToBinary(text) {
                return text.split('').map(char => {
                    return char.charCodeAt(0).toString(2).padStart(8, '0');
                }).join('');
            }

            createBinaryRibbon() {
                const text = this.getAttribute('text') || '';
                const binary = this.textToBinary(text);
                const container = this.shadowRoot.querySelector('.binary-container');
                container.innerHTML = '';

                // Group binary digits into bytes (8 bits each)
                for (let i = 0; i < binary.length; i += 8) {
                    const byte = binary.substr(i, 8);
                    const row = document.createElement('div');
                    row.className = 'binary-row';
                    
                    for (let j = 0; j < byte.length; j++) {
                        const pixel = document.createElement('div');
                        pixel.className = `binary-pixel ${byte[j] === '1' ? 'one' : 'zero'}`;
                        row.appendChild(pixel);
                    }
                    
                    // If incomplete byte, pad with zeros
                    for (let j = byte.length; j < 8; j++) {
                        const pixel = document.createElement('div');
                        pixel.className = 'binary-pixel zero';
                        row.appendChild(pixel);
                    }
                    
                    container.appendChild(row);
                }
            }

            startScrolling() {
                this.stopScrolling(); // Clear any existing interval
                
                const container = this.shadowRoot.querySelector('.binary-container');
                const scrollSpeed = parseInt(this.getAttribute('scroll-speed')) || 80;
                let scrollPosition = 0;
                
                this.scrollInterval = setInterval(() => {
                    scrollPosition += 1;
                    container.scrollTop = scrollPosition;
                    if (scrollPosition >= container.scrollHeight - container.clientHeight) {
                        scrollPosition = 0;
                    }
                }, scrollSpeed);
            }

            stopScrolling() {
                if (this.scrollInterval) {
                    clearInterval(this.scrollInterval);
                    this.scrollInterval = null;
                }
            }

            // Public methods for external control
            setText(text) {
                this.setAttribute('text', text);
            }

            setColors(oneColor, zeroColor) {
                this.setAttribute('one-color', oneColor);
                this.setAttribute('zero-color', zeroColor);
            }

            setShape(shape) {
                this.setAttribute('shape', shape);
            }

            toggleShape() {
                const currentShape = this.getAttribute('shape') || 'square';
                this.setShape(currentShape === 'square' ? 'circle' : 'square');
            }

            cycleColors() {
                this.currentColorIndex = (this.currentColorIndex + 1) % this.colorSchemes.length;
                const scheme = this.colorSchemes[this.currentColorIndex];
                this.setColors(scheme.one, scheme.zero);
                return scheme.name;
            }

            getCurrentColorScheme() {
                return this.colorSchemes[this.currentColorIndex].name;
            }
        }

        // Register the custom element
        customElements.define('binary-ribbon', BinaryRibbon);