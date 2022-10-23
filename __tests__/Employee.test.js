// Requires our Employee file
const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('should return the name, id, and email passed into the object', () => {
        let employee = new Employee('Alex', 1, 'test@test.com');
        expect(employee.name).toBe('Alex');
        expect(employee.id).toBe(1);
        expect(employee.email).toBe('test@test.com');
    });
  
    it('should return the name when the getName function is called', () => {
        let employee = new Employee('Alex', 1, 'test@test.com');
        expect(employee.getName()).toBe('Alex');
    });
  
    it('should return the id when the getId function is called', () => {
        let employee = new Employee('Alex', 1, 'test@test.com');
        expect(employee.getId()).toBe(1);
    });

    it('should return the email when the getEmail function is called', () => {
        let employee = new Employee('Alex', 1, 'test@test.com');
        expect(employee.getEmail()).toBe('test@test.com');
    });

    it('should return the role of Employee when the getRole function is called', () => {
        let employee = new Employee('Alex', 1, 'test@test.com');
        expect(employee.getRole()).toBe('Employee');
    });
});