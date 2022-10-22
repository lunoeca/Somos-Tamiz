const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e752ab5e97msh2f089fc99e94bc9p15d318jsn19574086b66c',
        'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
    }
};
    
function fetchData(){
    fetch('https://instagram130.p.rapidapi.com/account-feed?username=somostamiz', options)
		.then(response => response.json())
		.then(data => {
		console.log(data); 
		const html = data.map(post => {
			return post.node.display_url;
		})	
		console.log(html)
		document.querySelector('#app').innerHTML = html;
		})
		.catch(err => console.error(err));
}
fetchData();