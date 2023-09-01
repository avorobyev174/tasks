function validate(text) {
	const bracketsPairs = {
		'(': ')',
		'[': ']',
	};

	const openBrackets = Object.keys(bracketsPairs);
	const closeBrackets = Object.values(bracketsPairs);
  const stack = [];

  for (const char of text) {
		if (openBrackets.includes(char)) {
			stack.push(char);
		}

		if (closeBrackets.includes(char)) {
			if (!stack.length) {
				return false;
			}

			const bracket = stack.pop();
			if (char !== bracketsPairs[ bracket ]) {
				return false;
			}
		}
  }

	return !stack.length;
}

module.exports = validate