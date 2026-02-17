// import { apiCall, pokeAPICall } from './src/classes.js'

// GLOBAL ELEMENTS
const userInput1 = document.getElementById('name1');
const button1 = document.getElementById('button1');
const Img1 = document.getElementById('img1');

const userInput2 = document.getElementById('name2');
const button2 = document.getElementById('button2');
const Img2 = document.getElementById('img2');

// GLOBAL LISTENERS
// returns console mesage if empy, returns userInput1.value
button1.addEventListener("click", function() {
  let emptyErrorMsg = 'userInput1 must input Pokemon name';
  const inputValue = userInput1.value.trim()
  userInput1.value.toString() == '' ? alert(emptyErrorMsg) : getPokemon(inputValue, 1)
});

  // returns console mesage if empy, returns userInput2.value
button2.addEventListener("click", function() {
  const emptyErrorMsg = 'userInput2 must input Pokemon name';
  const inputValue = userInput2.value.trim()
  userInput2.value.toString() == '' ? alert(emptyErrorMsg) : getPokemon(inputValue, 2)
});

// GLOBAL CLASSES

  class apiCall {
    constructor(inputValue) {
      this.inputValue, inputValue;
    }
  };

  class pokeAPICall extends apiCall {
    constructor(inputValue, disp) {
      super(inputValue)
      this.disp = disp;
      this.inputValue = inputValue;
      this.pokeURL = 'https://pokeapi.co/api/v2/pokemon';
      this.pokeImgURL = 'https://cors-anywhere.com/https://img.pokemondb.net/artwork/avif'
      this.pokemon = {};
    };

    getPokemonByName() {
      let url = `${this.pokeImgURL}/${this.inputValue}.avif`
      fetch(`${this.pokeURL}/${this.inputValue}`)
      .then(data => data.json())
      .then(statList => buildPokemonDisp(statList))
      .then(stats => displayPokeData(stats, this.disp))
      fetchAndDisplayImage(url, this.disp)
    };
  };

// GLOBAL FUNCTIONS
// fetches pokemon data from the API
const getPokemon = (input, disp) => {
  clearInput(`name${disp}`);
  const newCall = new pokeAPICall(input, disp);
  newCall.getPokemonByName();
};

// formats fetched data into a table and returns it
const buildPokemonDisp = (pokeObj) => {
  const pokemonName = pokeObj.name;
  let pokemonTypes = [];
  let pokemonAbilities = [];
  const pokemonHeight = pokeObj.height;
  const pokemonWeight = pokeObj.weight;
  let pokemonMoves = [];
  Object.values(pokeObj.types).forEach(value => pokemonTypes.push(value.type.name));
  Object.values(pokeObj.abilities).forEach(value => pokemonAbilities.push(value.ability.name));
  Object.values(pokeObj.moves).forEach(value => pokemonMoves.push(value.move.name));
  const dispTable = `
    <table>
        <tr>
          <th>Name</th>
          <td>${pokemonName}</td>
        </tr>
        <tr>
          <th>Types</th>
          <td>${pokemonTypes.join(", ")}</td>
          </tr>
        <tr>
          <th>Abilities</th>
          <td>${pokemonAbilities.join(", ")}</td>
        </tr>
        <tr>
          <th>Height</th>
          <td>${pokemonHeight} meters</td>
        </tr>
        <tr>
          <th>Weight</th>
          <td>${pokemonWeight} kilos</td>
        </tr>
        <tr>
          <th>Moves</th>
          <td>${pokemonMoves.join(", ")}</td>
        </tr>
    </table>
  `;
  return dispTable
};


// creates elements passed in from param and looks at which display was used for search
const displayPokeData = (tableData, disp) => {
  const pushStat1 = () => document.getElementById('stats1').innerHTML = tableData;
  const pushStat2 = () => document.getElementById('stats2').innerHTML = tableData;
  if ( disp < 1 || disp > 2 ) {
    console.log(`Incorrect display referenced, call must be 1 or two. Called was: ${disp}`)
  } else if ( disp == 1 ) {
    pushStat1();
  } else if ( disp ==2 ) {
    pushStat2();
  }
};

// clears input field passed in from parameter
const clearInput = (input) => {
  const inputElement = document.getElementById(input);
  inputElement.value = '';
}

// async function to fetch and display image of pokemon submitted from input field
async function fetchAndDisplayImage(url, disp) {
  let displayUsed;

  if ( disp < 1 || disp > 2 ) {
    console.log(`Incorrect display referenced, call must be 1 or two. Called was: ${disp}`)
  } else if ( disp == 1 ) {
    displayUsed = img1;
  } else if ( disp ==2 ) {
    displayUsed = img2;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const imageBlob = await response.blob();
    const objectUrl = URL.createObjectURL(imageBlob);

    displayUsed.src = objectUrl;

  } catch (error) {
    console.error('Error fetching image:', error);
  }
}