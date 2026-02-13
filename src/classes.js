// GLOBAL CLASSES

  class apiCall {
    constructor(inputValue) {
      this.inputValue, inputValue;
      this.pokeURL = 'https://pokeapi.co/api/v2/pokemon';

    }

    // getAPIData() {
    //   fetch(`${this.url}`)
    //   .then(data => data.json())
    //   .then(output => console.log(output))
    // }
  }

  class pokeAPICall extends apiCall {
    constructor(pokeURL, inputValue) {
      super(pokeURL, inputValue);
    }

    getPokemonByName() {
      fetch(`${this.pokeURL}`)
      .then(data => data.json())
      .then(pokemonList => {
        const pokemon = Object.keys(pokemonList.results.find(key => pokemonList.results[key] === this.inputValue ))
        console.log(pokemon)
        // .then(out => console.log(out))
      })
    }
  }

  // let test = new pokeAPICall(pokeURL, 'bulbasaur').getPokemonByName()
  // console.log(test)

  export { apiCall, pokeAPICall }
