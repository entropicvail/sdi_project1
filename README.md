# Poké Check

Static page that displays information from the https://pokeapi.co/ API and images from https://img.pokemondb.net/ based on user input. Results are displayed in side-by-side display fields for comparison; this allows you to quickly compare basic stats of two Pokémon. ~ To function, this program requires an active internet connection.

## This Page Should
- have two working search boxes with a submit button for each that allows a user to search for Pokémon by name
- use event handlers for user interaction
- have an organized display-field on the left and right side of the page for comparing different Pokémon
- use css styling to make the page slightly less ugly
- contain this README.md file

## Setup Instructions
1. Open a terminal.
2. Clone this repo.
3. Navigate into the cloned repo driectory.
4. Download and install nodeJS from https://nodejs.org/en/download
5. Ensure npm is installed and up to date (at least 22).
```
npm -v
```
6. Install dependancies.
```
npm i -y
```
7. Insatll live-server (you may need to use admin privilages).
```
npm install -g live-server
```
8. From inside the cloned directory, start live server.
```
live-server
```
9. Open a web browser and navigate to the page displayed.

## Testing
Run live-server to server the application up and enter a Pokémon name into the field, hit the corresponding search button and look for results to populate onscreen. If they do not, open developer-mode in the browser and view console for error messages.