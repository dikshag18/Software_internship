#include <iostream>
using namespace std;

// Abstract base class
class Shape {
public:
    // Pure virtual function 
    virtual void draw() = 0; // This is a pure virtual function
    virtual double area() = 0; // Another pure virtual function

    void display() {
        cout << "Shape Display" << endl;
    }
};

class Circle : public Shape {
private:
    double radius;

public:
    Circle(double r) : radius(r) {}

    void draw() override {
        cout << "Drawing Circle" << endl;
    }

    double area() override {
        return 3.14 * radius * radius;
    }
};

class Rectangle : public Shape {
private:
    double length, width;

public:
    Rectangle(double l, double w) : length(l), width(w) {}

    void draw() override {
        cout << "Drawing Rectangle" << endl;
    }

    double area() override {
        return length * width;
    }
};

int main() {
    Shape* shape1 = new Circle(5.0);
    Shape* shape2 = new Rectangle(4.0, 6.0);

    shape1->draw();
    cout << "Circle Area: " << shape1->area() << endl;

    shape2->draw();
    cout << "Rectangle Area: " << shape2->area() << endl;

    // Calling a non-virtual function
    shape1->display();
    shape2->display();

    return 0;
}
