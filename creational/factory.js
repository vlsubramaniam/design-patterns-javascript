function Developer(name) {
    this.name = name,
        this.type = 'Developer'
}

function TeamLead(name) {
    this.name = name,
        this.type = 'Team Lead'
}

class Architect {
    constructor(name) {
        this.name = name,
            this.type = 'Technical Architect'
    }
}

function EmployeeFactory() {
    this.create = (type, name) => {
        switch (type) {
            case 1:
                return new Developer(name)
            case 2:
                return new TeamLead(name)
            case 3:
                return new Architect(name)
            default:
                return Developer(name)
        }
    }
}

const employee = new EmployeeFactory();

function displayEmployee() {
    console.log(`My name is ${this.name} and I'm a ${this.type}`)
}


let employees = [];
employees.push(employee.create(1, 'Rajan'));
employees.push(employee.create(2, 'subvl'));
employees.push(employee.create(3, 'Subramaniam'));

employees.forEach(employee => displayEmployee.call(employee));
