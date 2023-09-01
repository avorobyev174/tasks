function compareEntries(left, right) {
	if (left.time === right.time) {
		return left.isEntering ? 1 : -1;
	}

	return left.time - right.time;
}

function count(input) {
	const entries = [];

	for (const [ enteringTime, leavingTime ] of input) {
		entries.push({
			time: enteringTime,
			isEntering: true
		});

		entries.push({
			time: leavingTime,
			isEntering: false
		});
	}
	entries.sort(compareEntries);
	let currentCount = 0;
	let maxCount = 0;

	for (const { isEntering } of entries) {
		currentCount += isEntering ? 1 : - 1;
		maxCount = Math.max(currentCount, maxCount);
	}

	return maxCount;
}

module.exports = count