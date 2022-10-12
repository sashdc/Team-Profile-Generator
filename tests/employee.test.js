const Employee = require('../lib/Employee')

describe('Employee', ()=> {
    const employee = new Employee ('Jeff', 567, 'jeff@gmail.com');
    test('testing to get correct name', () => {
        expect(employee.getName()).toBe('Jeff')
    }
      )
    test('testing to get correct id', () => {
        expect(employee.getId()).toBe(567)

    })
    test('testing to check email address', () => {
        expect(employee.getEmail()).toBe('jeff@gmail.com')
    })
}
)