#include <iostream>
using namespace std;

class Print {
public:
    void show(int i) {
        cout << "Integer: " << i << endl;
    }

    void show(double d) {
        cout << "Double: " << d << endl;
    }

    void show(string s) {
        cout << "String: " << s << endl;
    }
};

int main() {
    Print p;
    p.show(5);      // Calls show(int)
    p.show(3.14);   // Calls show(double)
    p.show("Hello");   // Calls show(string)
    return 0;
}
