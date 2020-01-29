class Employee {
    constructor(name, money = 0, employer) {
        this.name = name;
        this.money = money;
        this.employer = employer;
    }

    payDay(money){
        this.money += money;
    }
}

module.exports = Employee;