// Requires our Intern file
const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should return the name, id, email and github passed into the object', () => {
        let employee = new Intern('Alex', 1, 'test@test.com', 'School Academy');
        expect(employee.name).toBe('Alex');
        expect(employee.id).toBe(1);
        expect(employee.email).toBe('test@test.com');
        expect(employee.school).toBe('School Academy');
    });
  
    it('should return the name when the getName function is called', () => {
        let employee = new Intern('Alex', 1, 'test@test.com', 'School Academy');
        expect(employee.getName()).toBe('Alex');
    });
  
    it('should return the id when the getId function is called', () => {
        let employee = new Intern('Alex', 1, 'test@test.com', 'School Academy');
        expect(employee.getId()).toBe(1);
    });

    it('should return the email when the getEmail function is called', () => {
        let employee = new Intern('Alex', 1, 'test@test.com', 'School Academy');
        expect(employee.getEmail()).toBe('test@test.com');
    });

    it('should return the school name when the getGithub function is called', () => {
        let employee = new Intern('Alex', 1, 'test@test.com', 'School Academy');
        expect(employee.getSchool()).toBe('School Academy');
    });

    it('should return the role of Intern when the getRole function is called', () => {
        let employee = new Intern('Alex', 1, 'test@test.com', 'School Academy');
        expect(employee.getRole()).toBe('Intern');
    });
});