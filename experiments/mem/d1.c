int main() {
    int x = 42;
    int a[3] = { 1, 5, 6 };
	printf("%d, %d\n", sizeof(a), sizeof(a[0]));
    for (int i = 0; i < (sizeof(a) / sizeof(a[0])); i++) {
        printf("[%llu] %p -> %d %llu [%p]\n", &a[i], &a[i], a[i], &i, &i);
    }
}