import { apiCall, pokeAPICall } from './src/classes.js'

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
  userInput1.value.toString() == '' ? alert(emptyErrorMsg) : new apiCall(pokeURL, inputValue)});

  // returns console mesage if empy, returns userInput2.value
button2.addEventListener("click", function() {
  const emptyErrorMsg = 'userInput2 must input Pokemon name';
  const inputValue = userInput2.value.trim()
  userInput2.value.toString() == '' ? alert(emptyErrorMsg) : inputValue});


let test = new pokeAPICall('bulbasaur').getPokemonByName()
console.log(test)



