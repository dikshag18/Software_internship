#include <iostream>
using namespace std;

// Base class
class Shape {
public:
    virtual void draw() const {  // Virtual function
        cout << "Drawing a generic shape" << endl;
    }
};

// Derived class
class Circle : public Shape {
public:
    void draw() const override {  // Override the base class function
        cout << "Drawing a circle" << endl;
    }
};

// Derived class
class Rectangle : public Shape {
public:
    void draw() const override {  // Override the base class function
        cout << "Drawing a rectangle" << endl;
    }
};

// Function to demonstrate polymorphism
void drawShape(const Shape& shape) {
    shape.draw();  // Calls the appropriate function based on the actual object type
}

int main() {
    Circle circle;
    Rectangle rectangle;
    Shape genericShape;

    drawShape(genericShape);  // Output: Drawing a generic shape
    drawShape(circle);        // Output: Drawing a circle
    drawShape(rectangle);     // Output: Drawing a rectangle

    return 0;
}
