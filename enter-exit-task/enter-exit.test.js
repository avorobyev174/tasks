const count = require('./enter-exit.js')

describe('count function test', () => {
	test('valid', () => {
		expect(count([])).toBe(0);
	})

	test('valid', () => {
		expect(count([[1, 5], [0, 1], [4, 5]])).toBe(2);
	})

	test('valid', () => {
		expect(count([[1, 10], [5, 6], [2, 3], [7, 8]])).toBe(2);
	})

	test('valid', () => {
		expect(count([[1, 2], [1, 10], [4, 9], [8, 15], [5, 6], [8, 16]])).toBe(4);
	})
})
