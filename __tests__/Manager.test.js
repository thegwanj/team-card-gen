// Requires our Manager file
const Manager = require('../lib/Manager');

describe('Intern', () => {
    it('should return the name, id, email and office passed into the object', () => {
        let employee = new Manager('Alex', 1, 'test@test.com', 101);
        expect(employee.name).toBe('Alex');
        expect(employee.id).toBe(1);
        expect(employee.email).toBe('test@test.com');
        expect(employee.office).toBe(101);
    });
  
    it('should return the name when the getName function is called', () => {
        let employee = new Manager('Alex', 1, 'test@test.com', 101);
        expect(employee.getName()).toBe('Alex');
    });
  
    it('should return the id when the getId function is called', () => {
        let employee = new Manager('Alex', 1, 'test@test.com', 101);
        expect(employee.getId()).toBe(1);
    });

    it('should return the email when the getEmail function is called', () => {
        let employee = new Manager('Alex', 1, 'test@test.com', 101);
        expect(employee.getEmail()).toBe('test@test.com');
    });

    it('should return the office number when the getOffice function is called', () => {
        let employee = new Manager('Alex', 1, 'test@test.com', 101);
        expect(employee.getOffice()).toBe(101);
    });

    it('should return the role of Manager when the getRole function is called', () => {
        let employee = new Manager('Alex', 1, 'test@test.com', 101);
        expect(employee.getRole()).toBe('Manager');
    });
});