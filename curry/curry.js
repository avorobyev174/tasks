/*function add(...args) {
	return args.reduce((sum, cur) => sum += cur, 0)
}*/
function add(a, b, c) {
	return a + b + c
}
function multiply (a, b, c) {
	return a * b * c
}
function curry(func) {
	return function curried(...args) {
		if (args.length >= func.length) {
			return func.apply(this, args);
		} else {
			return function(...args2) {
				return curried.apply(this, args.concat(args2))
			}
		}
	}
}

const curriedAdd = curry(add);
console.log(typeof curriedAdd)
const curriedMultiply = curry(multiply);

module.exports = { curriedAdd, curriedMultiply }