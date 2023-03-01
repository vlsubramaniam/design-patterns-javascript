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
        this.type = 'Architect'
    }
}

function EmployeeFactory(type, name) {
    this.create = () => {
        switch(type) {
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

const dev = new EmployeeFactory(1, 'Rajan').create();
const lead = new EmployeeFactory(2, 'VLS');
const reactArchitect = new EmployeeFactory(3, 'Subramaniam').create();



let employees = [];

employees.push(dev);
employees.push(lead.create());
employees.push(reactArchitect);


const names = employees.map(emp => emp.name);
console.log(names)
