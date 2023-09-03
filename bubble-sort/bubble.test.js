const sort = require('./bubble.js')

describe('sort test', () => {
	test('valid', () => {
		expect(sort([ 5, 3, 2, 1 ])).toEqual([1, 2, 3, 5]);
	})

	test('valid', () => {
		expect(sort([1, 2, 3])).toEqual([1, 2, 3]);
	})
})
