class Complex {
public:
    float real, imag;

    Complex operator + (const Complex& c) {
        Complex temp;
        temp.real = real + c.real;
        temp.imag = imag + c.imag;
        return temp;
    }
};

int main() {
    Complex c1, c2, c3;
    c1.real = 2.0; c1.imag = 3.0;
    c2.real = 1.0; c2.imag = 4.0;
    c3 = c1 + c2; // Calls overloaded operator +
    return 0;
}
