// GLOBAL CLASSES

  class apiCall {
    constructor(inputValue) {
      this.inputValue, inputValue;
    }
  }

  class pokeAPICall extends apiCall {
    constructor(inputValue) {
      super(inputValue)
      this.inputValue = inputValue;
      this.pokeURL = 'https://pokeapi.co/api/v2/pokemon';
      this.pokemon = {};
    }

    getPokemonByName() {
      fetch(`${this.pokeURL}/${this.inputValue}`)
      .then(data => data.json())
      .then(out => {
        console.log(out)
      })
    }
  }

  export { apiCall, pokeAPICall }
