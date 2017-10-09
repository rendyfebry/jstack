import Dog from './dog'

test('Dog.bar', () => {
	const testDog = new Dog('Test')
	expect(testDog.bark()).toBe('Guk guk, I am Test')
})
