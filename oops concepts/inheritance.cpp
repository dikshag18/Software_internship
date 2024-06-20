#include <iostream>
#include <string>
using namespace std;

// Base class
class Vehicle {
protected:
    string brand;
    int year;

public:
    Vehicle(const string& vehicleBrand, int vehicleYear)
        : brand(vehicleBrand), year(vehicleYear) {}

    void displayBasicInfo() const {
        cout << "Brand: " << brand << "\nYear: " << year << endl;
    }

    virtual void displayInfo() const = 0;  // Pure virtual function
};

// Derived class
class Car : public Vehicle {
private:
    int numberOfDoors;

public:
    Car(const string& vehicleBrand, int vehicleYear, int doors)
        : Vehicle(vehicleBrand, vehicleYear), numberOfDoors(doors) {}

    void displayInfo() const override {
        displayBasicInfo();
        cout << "Number of doors: " << numberOfDoors << endl;
    }
};

// Derived class
class Bike : public Vehicle {
private:
    bool hasCarrier;

public:
    Bike(const string& vehicleBrand, int vehicleYear, bool carrier)
        : Vehicle(vehicleBrand, vehicleYear), hasCarrier(carrier) {}

    void displayInfo() const override {
        displayBasicInfo();
        cout << "Has carrier: " << (hasCarrier ? "Yes" : "No") << endl;
    }
};

int main() {
    Car myCar("Toyota", 2020, 4);
    Bike myBike("Yamaha", 2019, true);

    cout << "Car Information:\n";
    myCar.displayInfo();
    cout << "\nBike Information:\n";
    myBike.displayInfo();

    return 0;
}
