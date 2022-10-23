const options = {
    method: 'GET',
	mode: 'cors',
    headers: {
		'X-RapidAPI-Key': '3630fe436cmshc54da741d82d31dp1aefd8jsn7324ec55356c', 
        /*'X-RapidAPI-Key': 'e752ab5e97msh2f089fc99e94bc9p15d318jsn19574086b66c', */ //La key alcanzo el limite de llamadas mensuales
        'X-RapidAPI-Host': 'instagram130.p.rapidapi.com',
		'Access-Control-Allow-Origin': '*',
    }
};

function fetchData(){
    fetch('https://instagram130.p.rapidapi.com/account-feed?username=somostamiz', options)
		.then(response => response.json())
		.then(data => {
			console.log("DATA", data)		
			const arrayOfUrl = data.map(post => post.node.display_url)		
			console.log("arraOfUrl", arrayOfUrl)
			const arrayOfImg = arrayOfUrl.map(image => ('<img crossorigin="anonymous" class="api-img" src="' + image + '" alt=""/>'))	
			console.log("arrayOfImg",arrayOfImg)
			arrayOfImg.map(img => document.querySelector('#app').innerHTML += img)
		})
		.catch(err => console.error(err));
}
fetchData();

//Se consiguio crear el array desde la api y se puede ver en consola pero cuando se lo intenta presentar en el html sale error. 'from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.'

