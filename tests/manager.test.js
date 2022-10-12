const Manager = require('../lib/Manager')

describe('Manager', ()=> {
    const manager = new Manager ('Karl', 567, 'karl@gmail.com', 32);
    test('testing to get correct name', () => {
        expect(manager.getName()).toBe('Karl')
    }
      )
    test('testing to get correct id', () => {
        expect(manager.getId()).toBe(567)
    })
    test('testing to check email address', () => {
        expect(manager.getEmail()).toBe('karl@gmail.com')
    })
    test('testing to check office number', () => {
        expect(manager.getOfficeNumber()).toBe(32)
    })
})