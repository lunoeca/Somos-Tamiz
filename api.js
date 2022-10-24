const options = {
    method: 'GET',
    headers: {
		'Content-Type': 'application/json',
    }
};
var API_KITCHEN = 'https://api.spoonacular.com/recipes/random?apiKey=0d82084a9a464a09af441a26b6c37deb';
function fetchData(){
	console.log("hias234")
    fetch(API_KITCHEN, options) //La api trae una receta random!
		.then(response => response.json())
		.then(data => {
			console.log("DATA", data.recipes);
			const title = data.recipes.map(recipe => recipe.title);	
			const img = data.recipes.map(recipe => recipe.image) || "./assets/TAMIZ-FOTOS/6.jpeg";;	// Algunas recetas no traen imagen!
			const text = data.recipes.map(recipe => recipe.instructions);


			receta = document.getElementById('receta-api');
			recetaTitulo = document.getElementById('receta-titulo');
			recetaTexto = document.getElementById('receta-texto');
			recetaImagen = document.getElementById('receta-imagen');

			recetaImagen.src = img

			var recTitle = document.createElement('recTitle');
			recTitle.innerHTML = title;
			recetaTitulo.appendChild(recTitle);

			var recText = document.createElement('recText');
			recText.innerHTML = text;
			recetaTexto.appendChild(recText);

		})
		.catch(err => console.error(err));
}
fetchData();




