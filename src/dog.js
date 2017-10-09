class Dog {
	constructor(name) {
		this.name = name
	}

	bark() {
		return `Guk guk, I am ${this.name}`
	}
}

module.exports = Dog
