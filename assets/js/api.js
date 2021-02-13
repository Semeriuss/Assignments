var BASE_URL = 'https://restcountries.eu/rest/v2/';

requests = {
	ALL: () => {
		return fetch(`${BASE_URL}all`);
	},
	SEARCH: (name) => {
		return fetch(`${BASE_URL}/name/${name}`);
	}
};

// requests.ALL().then((val) => val.json()).then((val) => console.table(val));
