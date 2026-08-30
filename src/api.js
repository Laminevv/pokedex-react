export function getPokemonId(pokemon) {
  return pokemon.url.split("/").filter(Boolean).pop()
}

// The sprite images are hosted on GitHub, one PNG per id.
export function getSpriteUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}