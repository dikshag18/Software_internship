
#include <iostream>
using namespace std;

class BankAccount {
private:
    double balance;  // Private member variable to hold the balance

public:
    // Constructor to initialize the balance
    BankAccount(double initialBalance) {
        if (initialBalance >= 0) {
            balance = initialBalance;
        } else {
            balance = 0;
            cout << "Initial balance invalid. Set to 0." << endl;
        }
    }

    // Public method to set the balance
    void setBalance(double newBalance) {
        if (newBalance >= 0) {
            balance = newBalance;
        } else {
            cout << "New balance invalid!" << endl;
        }
    }

    // Public method to get the balance
    double getBalance() const {
        return balance;
    }

    // Public method to deposit money
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposited: " << amount << endl;
        } else {
            cout << "Deposit amount invalid!" << endl;
        }
    }

    // Public method to withdraw money
    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Withdrew: " << amount << endl;
        } else {
            cout << "Withdrawal amount invalid or exceeds balance!" << endl;
        }
    }
};

int main() {
    BankAccount account(1000); // Create a BankAccount object with an initial balance of 1000

    cout << "Initial balance: " << account.getBalance() << endl;

    account.deposit(500); // Deposit 500
    cout << "Balance after deposit: " << account.getBalance() << endl;

    account.withdraw(200); // Withdraw 200
    cout << "Balance after withdrawal: " << account.getBalance() << endl;

    account.setBalance(1500); // Set balance to 1500
    cout << "Balance after setting new balance: " << account.getBalance() << endl;

    account.setBalance(-500); // Attempt to set an invalid balance
    cout << "Balance after attempting to set invalid balance: " << account.getBalance() << endl;

    return 0;
}
