const Intern = require('../lib/Intern')

describe('Intern', ()=> {
    const intern = new Intern ('Clare', 111, 'clare@gmail.com', 'Waterloo');
    test('testing to get correct name', () => {
        expect(intern.getName()).toBe('Clare')
    }
      )
    test('testing to get correct id', () => {
        expect(intern.getId()).toBe(111)
    })
    test('testing to check email address', () => {
        expect(intern.getEmail()).toBe('clare@gmail.com')
    })
    test('testing to check office number', () => {
        expect(intern.getSchool()).toBe('Waterloo')
    })
    test('testing to check office number', () => {
        expect(intern.getRole()).toBe('Intern')
    })
})