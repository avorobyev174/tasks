const { curriedAdd, curriedMultiply } = require('./curry.js')

describe('curry test', () => {
	test('valid', () => {
		expect(curriedAdd(1, 2, 3)).toBe(6);
	})

	test('valid', () => {
		expect(curriedAdd(1)(2)(3)).toEqual(6);
	})

	test('valid', () => {
		expect(curriedMultiply(1)(2)(3)).toEqual(6);
	})
})
