// a) Eu usaria os comando tsc exercicio4.ts e node exercicio4.js no terminal.

// b) Eu usaria o comando tsc && node ./build/exercicio4.js

// c) Basta apenas digitar tsc. 

/* d) Foram alterados o seguinte comando:

"target": "es6"

E deixaram de ser apenas comentários:

"sourceMap": true,         
"outDir": "./build", Foi adicionado o caminho ./build
"rootDir": "./src",  Foi adicionado o caminho ./src     
"removeComments": true,     
"noImplicitAny": true

*/

type pokemon = {
    name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}