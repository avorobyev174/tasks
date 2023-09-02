const searchScore = require('./binary.js')
const table = [
	[
		{
			login: "stypeano",
			leaguePoints: 4
		},
		{
			login: "rstrazir",
			leaguePoints: 45
		},
		{
			login: "cathead",
			leaguePoints: 143
		},
		{
			login: "cavernous",
			leaguePoints: 324
		}
	],
	[
		{
			login: "ConspiracyLil",
			leaguePoints: 356
		},
		{
			login: "CzarStories",
			leaguePoints: 568
		},
		{
			login: "GottaSaiyan",
			leaguePoints: 598
		},
		{
			login: "Mountaintrid",
			leaguePoints: 785
		}
	],
	[
		{
			login: "Rectionom",
			leaguePoints: 930
		},
		{
			login: "JoshChase",
			leaguePoints: 931
		},
		{
			login: "DreamLess",
			leaguePoints: 956
		},
		{
			login: "BlondiePlanet",
			leaguePoints: 1045
		}
	],
	[
		{
			login: "Breakingbing",
			leaguePoints: 1056
		},
		{
			login: "Goldenelox",
			leaguePoints: 1130
		},
		{
			login: "SaiyanBroadway",
			leaguePoints: 1432
		},
		{
			login: "BoostScooby",
			leaguePoints: 1476
		}
	]
]
describe('count function test', () => {
	test('valid', () => {
		expect(searchScore(table, 324)).toEqual({ league: 1, placement: 1 });
	})
	test('valid', () => {
		expect(searchScore(table, 930)).toEqual({ league: 3, placement: 4 });
	})
})
