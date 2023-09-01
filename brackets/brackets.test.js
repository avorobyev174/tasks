const validate = require('./brackets.js')

describe('bracket function test', () => {
	test('valid', () => {
		expect(validate('(((())()))')).toBe(true);
	})

	test('not valid', () => {
		expect(validate('())')).toBe(false);
	})

	test('valid', () => {
		expect(validate('([])')).toBe(true);
	})

	test('valid', () => {
		expect(validate('([)]')).toBe(false);
	})
})
