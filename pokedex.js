const https = require("https")
const {remote} = require("electron")
let pokemonNameHeading = document.getElementById("pokemon-name")
let pokemonDescription = document.getElementById("pokemon-description")
let pokemonImage       = document.getElementById("pokemon-sprite")
let searchForm         = document.getElementById("search")
let searchQuery        = document.getElementById("search-query")
let searchLanguage     = document.getElementById("search-language")
let maximizeButton     = document.getElementById("maximize")
let minimizeButto      = document.getElementById("minimize")
let closeButton        = document.getElementById("close")



function lookup(resource, callback) {
	// $.getJSON(`https://pokeapi.co/api/v2/${resource}/`, callback)
	https.get(`https://pokeapi.co/api/v2/${resource}/`, function(response){
		response.setEncoding("utf8")
		let data = ""
		response.on("data", function(chunk){
			data += chunk
		})
		response.on('end', function(){
			callback(JSON.parse(data))
		})
	})
}

function lookupPokemon(id, callback) {
	lookup(`pokemon/${id}`, callback)
}

function lookupPokemonSpecies(id, callback) {
	lookup(`pokemon-species/${id}`, callback)
}

searchForm.addEventListener("submit", event => {
	event.preventDefault()
  lookupPokemonSpecies(searchQuery.value, resource => {
    let name                       = resource.names.find(name => name.language.name == searchLanguage.value)
    pokemonNameHeading.textContent = name.name
    let description                = resource.flavor_text_entries.find(flavor_text => flavor_text.language.name == searchLanguage.value && flavor_text.version.name == "alpha-sapphire")
    pokemonDescription.textContent = description.flavor_text
  })
  lookupPokemon(searchQuery.value, resource => {
    let image        = resource.sprites.front_default
    pokemonImage.src = image
  })
})


closeButton.addEventListener("click", function(event){
	event.preventDefault()
	remote.getCurrentWindow().close()
})