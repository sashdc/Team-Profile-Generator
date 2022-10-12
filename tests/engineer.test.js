const Engineer = require('../lib/Engineer')

describe('Engineer', ()=> {
    const engineer = new Engineer ('Homer', 432, 'homer@gmail.com', 'homersimp');
    test('testing to get correct name', () => {
        expect(engineer.getName()).toBe('Homer')
    }
      )
    test('testing to get correct id', () => {
        expect(engineer.getId()).toBe(432)
    })
    test('testing to check email address', () => {
        expect(engineer.getEmail()).toBe('homer@gmail.com')
    })
    test('testing to check office number', () => {
        expect(engineer.getGitHub()).toBe('homersimp')
    })
    test('testing to check office number', () => {
        expect(engineer.getRole()).toBe('Engineer')
    })
})