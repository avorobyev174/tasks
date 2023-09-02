function searchScore(leaderboard, score) {
	const currentLeague = binaryPlayerSearchLeague(leaderboard, score);
	console.log(currentLeague)
	if (currentLeague === null) {
		return null;
	}

	const currentPlacement= binaryPlayerSearchPlacement(leaderboard[ currentLeague ], score);
	console.log(currentPlacement)
	if (currentPlacement === null) {
		return null;
	}

	return {
		league: currentLeague + 1,
		placement: leaderboard[ currentLeague ].length - currentPlacement
	};
}

function binaryPlayerSearchLeague(leaderboard, score) {
	let left = 0;
	let right = leaderboard.length - 1;
	const firstPlacePoints = leaderboard[ right ][ leaderboard[ right ].length - 1 ].leaguePoints;
	const lastPlacePoints = leaderboard[ 0 ][ 0 ].leaguePoints;

	if (lastPlacePoints > score || firstPlacePoints < score) {
		return null;
	}

	while (left <= right) {
		const center = Math.floor((right + left) / 2);

		const currentLeague = leaderboard[ center ]
		const firstPlayerPoints = currentLeague[ currentLeague.length - 1 ].leaguePoints;
		const lastPlayerPoints = currentLeague[ 0 ].leaguePoints;

		if (lastPlayerPoints <= score && score <= firstPlayerPoints) {
			return center;
		}

		if (lastPlayerPoints > score) {
			right = center - 1;
		} else if (score > firstPlayerPoints) {
			// то ищем справа
			left = center + 1;
		}
	}

	return null;
}

function binaryPlayerSearchPlacement(league, score) {
	let left = 0;
	let right = league.length - 1;

	while (left <= right) {
		const center = Math.floor((right + left) / 2);
		const centerPoints = league[ center ].leaguePoints
		console.log(centerPoints)
		if (centerPoints === score) {
			return center;
		}

		if (centerPoints > score) {
			right = center - 1
		} else if (score > centerPoints){
			left = center + 1
		}
	}

	return null;
}

module.exports = searchScore