const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f4d91db00fmsh99b38ac8ea00004p108099jsn3de33cdc8bf1',
		'X-RapidAPI-Host': 'easy-instagram-service.p.rapidapi.com'
	}
};

fetch('https://easy-instagram-service.p.rapidapi.com/username?username=somostamiz&random=x8n3nsj2', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));