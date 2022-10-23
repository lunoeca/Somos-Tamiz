const options = {
    method: 'GET',
	
    headers: {
		'Key': '1', 
    }
};
function fetchData(){
    fetch('www.themealdb.com/api/json/v1/1/random.php', options)
		.then(response => response.json())
		.then(data => {
			console.log("DATA", data)		
			// const arrayOfUrl = data.map(post => post.node.display_url)		
			// console.log("arraOfUrl", arrayOfUrl)
			// const arrayOfImg = arrayOfUrl.map(image => ('<img crossorigin="anonymous" class="api-img" src="' + image + '" alt=""/>'))	
			// console.log("arrayOfImg",arrayOfImg)
			// arrayOfImg.map(img => document.querySelector('#app').innerHTML += img)
		})
		.catch(err => console.error(err));
}
fetchData();
