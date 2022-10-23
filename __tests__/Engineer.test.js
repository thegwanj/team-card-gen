// Requires our Engineer file
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should return the name, id, email and github passed into the object', () => {
        let employee = new Engineer('Alex', 1, 'test@test.com', 'testing');
        expect(employee.name).toBe('Alex');
        expect(employee.id).toBe(1);
        expect(employee.email).toBe('test@test.com');
        expect(employee.github).toBe('testing');
    });
  
    it('should return the name when the getName function is called', () => {
        let employee = new Engineer('Alex', 1, 'test@test.com', 'testing');
        expect(employee.getName()).toBe('Alex');
    });
  
    it('should return the id when the getId function is called', () => {
        let employee = new Engineer('Alex', 1, 'test@test.com', 'testing');
        expect(employee.getId()).toBe(1);
    });

    it('should return the email when the getEmail function is called', () => {
        let employee = new Engineer('Alex', 1, 'test@test.com', 'testing');
        expect(employee.getEmail()).toBe('test@test.com');
    });

    it('should return the testing github when the getGithub function is called', () => {
        let employee = new Engineer('Alex', 1, 'test@test.com', 'testing');
        expect(employee.getGithub()).toBe('testing');
    });

    it('should return the role of Engineer when the getRole function is called', () => {
        let employee = new Engineer('Alex', 1, 'test@test.com', 'testing');
        expect(employee.getRole()).toBe('Engineer');
    });
});