const binarySearch = require('./binary.js')
const plants = [
	"Аспарагус",
	"Гвоздика",
	"Жасмин",
	"Калина",
	"Малина",
	"Пион",
	"Тысячелистник",
	"Хризантема",
	"Шафран",
	"Юкка",
]
describe('count function test', () => {
	test('valid', () => {
		expect(binarySearch(plants, "Пион")).toBe(5);
	})

	test('valid', () => {
		expect(binarySearch(plants, "Роза")).toBe(null);
	})

	test('valid', () => {
		expect(binarySearch(plants, "Хризантема")).toBe(7);
	})

	test('valid', () => {
		expect(binarySearch(plants, "Юкка")).toBe(9);
	})
})
