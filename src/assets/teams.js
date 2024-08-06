import north from '../assets/img/logos/north.svg';
import ldlc from '../assets/img/logos/ldlc.svg';

export const teams = [
	{
		teamTag: "csgo",
		name: "CSGO",
		country: "cis",
		hashtag: "#howl7rounds",
		players: ['deezik', 'bulhkin', 'klaud', 'axle', 'bat'],
		leaders: ['bomb1la'],
		hltv: "#15",
		year: "2017",
		wins: "167",
		games: "167",
		matches: [
			{ logo: north, tourney: "ESL Pro League S7 Europe", us: "", they: "", date: "Apr 14th" },
			{ logo: ldlc, tourney: "ESL Pro League S7 Europe", us: "", they: "", date: "Apr 12th" },
			{ logo: ldlc, tourney: "ESL Pro League S7 Europe", us: "2", they: "1", date: "" },
			{ logo: north, tourney: "ESL Pro League S7 Europe", us: "0", they: "2", date: "" },
			{ logo: north, tourney: "ESL Pro League S7 Europe", us: "2", they: "0", date: "" },
			{ logo: ldlc, tourney: "ESL Pro League S7 Europe", us: "1", they: "2", date: "" },
		],
		achievements: [
			{
				name: "5K - by Challengermode",
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Camp_Nou_Experience_%28Ank_Kumar%2C_INFOSYS%29_02.jpg/330px-Camp_Nou_Experience_%28Ank_Kumar%2C_INFOSYS%29_02.jpg",
				organiser: "Challengermode",
				type: "Online",
				country: "eu",
				location: "Europe",
				numberOfTeams: "32",
				system: "Single Elimination",
				pool: "€150",
				date: "18.05.2019",
			}
		],
		story: 'teams.csgo',
	},
	{
		teamTag: "csgoromcyk",
		name: "Romčyk",
		country: "by",
		hashtag: "#Romčyk4Life",
		players: ['rabcau', 'bulhkin', 'klaud', 'godeach'],
		leaders: ['bomb1la'],
		hltv: "#1943",
		year: "2019",
		wins: "6",
		games: "6",
		matches: [
			{ logo: north, tourney: "ESL Pro League S7 Europe", us: "", they: "", date: "Apr 14th" },
			{ logo: ldlc, tourney: "ESL Pro League S7 Europe", us: "", they: "", date: "Apr 12th" },
			{ logo: ldlc, tourney: "ESL Pro League S7 Europe", us: "2", they: "1", date: "" },
			{ logo: north, tourney: "ESL Pro League S7 Europe", us: "0", they: "2", date: "" },
			{ logo: north, tourney: "ESL Pro League S7 Europe", us: "2", they: "0", date: "" },
			{ logo: ldlc, tourney: "ESL Pro League S7 Europe", us: "1", they: "2", date: "" },
		],
		achievements: [
			{
				name: "Vancouver Cup 2019",
				image: "https://www.sportsmirchi.com/wp-content/uploads/2015/08/UEFA-Champions-League-Winners-Runner-ups.jpg",
				organiser: "FACEIT",
				type: "Offline",
				country: "ca",
				location: "Vancouver",
				numberOfTeams: "8",
				system: "Group Stage + Single Elimination",
				pool: "$50,000 USD",
				date: "28.09.2018 - 02.10.2018",
			}
		],
		story: 'teams.csgoromcyk'
	},
	{
		teamTag: "osu",
		name: "OSU!",
		country: "ua",
		hashtag: "#OsuOsuOsu",
		players: ['seramisv'],
		leaders: ['bomb1la'],
		hltv: "#1943",
		year: "2019",
		wins: "6",
		games: "6",
		matches: [
			{ logo: north, tourney: "Osu Belgium Cup 2019", us: "", they: "", date: "Apr 14th" },
			{ logo: ldlc, tourney: "Osu Belgium Cup 2019", us: "", they: "", date: "Apr 12th" },
			{ logo: ldlc, tourney: "Osu Belgium Cup 2019", us: "2", they: "1", date: "" },
			{ logo: north, tourney: "Osu Belgium Cup 2019", us: "2", they: "0", date: "" },
		],
		achievements: [
			{
				name: "Osu Belgium Cup 2019",
				image: "https://cdn.vox-cdn.com/thumbor/b-sty3zqln7s-tRlc9OTA7R9CpA=/653x355:3427x2648/1200x800/filters:focal(1692x591:2332x1231)/cdn.vox-cdn.com/uploads/chorus_image/image/61071647/930238058.jpg.0.jpg",
				organiser: "Osu Org.",
				type: "Offline",
				country: "be",
				location: "Brussels",
				numberOfTeams: "64",
				system: "Group Stage + Single Elimination",
				pool: "$250,000 USD",
				date: "28.03.2019 - 02.04.2019",
			}
		],
		story: 'teams.csgoromcyk'
	}
];