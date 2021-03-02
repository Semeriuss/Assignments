const BASE_URL = 'https://restcountries.eu/rest/v2/';

export const requests = {
	ALL: () => {
		return fetch(`${BASE_URL}all`);
	},
	SEARCH: (name) => {
		return fetch(`${BASE_URL}name/${name}`);
	},
	REGION: (name) => {
		return fetch(`${BASE_URL}region/${name}`);
	},
	SUBREGION: (name) => {
		return fetch(`${BASE_URL}subregion/${name}`);
	}
};

// requests.ALL().then((val) => val.json()).then((val) => console.table(val));
// requests.SEARCH('Ethiopia').then((res) => res.json()).then((res) => console.log(res)).catch((err) => {console.log(err);});
