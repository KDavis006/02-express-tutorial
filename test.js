const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {
    q: 'adventure time'
  },
  headers: {
    'X-RapidAPI-Key': '96dffcb258msh74d20625a3f4ebap1d58bcjsn424b1bdf1972',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
};
async function main() {

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}
main()