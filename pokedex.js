let pokemonNameHeading = document.getElementById("pokemon-name")
let pokemonDescription = document.getElementById("pokemon-description")
let pokemonImage       = document.getElementById("pokemon-sprite")
let searchForm         = document.getElementById("search")
let searchQuery        = document.getElementById("search-query")
let searchLanguage     = document.getElementById("search-language")

function lookup(resource, callback) {
	// $.getJSON(`https://pokeapi.co/api/v2/${resource}/`, callback)
}

function lookupPokemon(id, callback) {
	// lookup(`pokemon/${id}`, callback)
}

function lookupPokemonSpecies(id, callback) {
	// lookup(`pokemon-species/${id}`, callback)
}

searchForm.addEventListener("submit", event => {
	event.preventDefault()
//   lookupPokemonSpecies(searchQuery.value, resource => {
//     let name                       = resource.names.find(name => name.language.name == searchLanguage.value)
//     pokemonNameHeading.textContent = name.name
//     let description                = resource.flavor_text_entries.find(flavor_text => flavor_text.language.name == searchLanguage.value && flavor_text.version.name == "alpha-sapphire")
//     pokemonDescription.textContent = description.flavor_text
//   })
//   lookupPokemon(searchQuery.value, resource => {
//     let image        = resource.sprites.front_default
//     pokemonImage.src = image
//   })
})