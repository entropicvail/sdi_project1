// loading.io

// GLOBAL VARIABLS
let pokeList = []
let list = document.querySelector("#pokelist")

// GLOBAL ELEMENTS
const userInput1 = document.getElementById('name1')
const button1 = document.getElementById('button1')

const userInput2 = document.getElementById('name2')
const button2 = document.getElementById('button2')

// GLOBAL LISTENERS
// returns console mesage if empy, returns userInput1.value
button1.addEventListener("click", function() {
  let emptyErrorMsg = 'userInput1 must input Pokemon name';
  const inputValue = userInput1.value.trim()
  userInput1.value.toString() == '' ? alert(emptyErrorMsg) : inputValue});

  // returns console mesage if empy, returns userInput2.value
button2.addEventListener("click", function() {
  const emptyErrorMsg = 'userInput2 must input Pokemon name';
  const inputValue = userInput2.value.trim()
  userInput2.value.toString() == '' ? alert(emptyErrorMsg) : inputValue});

// GLOBAL CLASSES
class apiCall {
  constructor(url, searchDepth) {
    this.url = url;
    this.searchDepth = searchDepth;
  }

  getAPIData() {
    fetch(`${this.url}/${searchDepth}`)
    .then(data => data.json())
    .then(output => console.log(output))
  }
}

  // GLOBAL FUNCTIONS

function displayList(pokemans){
  // console.log(pokemans[0])
  // {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'}
  if (pokemans < 1) {
    console.log(`EMPTY`)
  } else {
    pokemans.forEach(pokemon=>{
      console.log(pokemon)
      // const pokeName = pokemon.name
      // const listItem = document.createElement("li");
      // listItem.textContent = pokeName
      // listItem.id=pokeName
      // list.appendChild(listItem)
    })
  }
}

// // API CALLS
// fetch(`https://pokeapi.co/api/v2/pokemon`)
//   .then(res => res.json())
//   .then(data => pokeList = data.results)
//   .then(() => {
//     // console.log(pokeList)
//     displayList(pokeList)
//   })