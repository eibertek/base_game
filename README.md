**NODE.JS BOILERPLATE**

# This is a BoilerPLate for creating a node.js project with ES6

Birthday App

Version Changes:

 Version        | Changes 
 ------------- |:-------------:
 *1.0.0*      | ES6 Babel moduler 
 *1.0.1*      | Added react-wysiwyg


```javascript
  "scripts": {
    "test": "jest", 
    "build": "babel ./src/ --out-dir dist/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log --copy-files",
    "start": "npm run build && node dist/index.js",
    "run-all": "Run the mock server and the localhostserver, with the webpack bundle generator"
  }
```

A paratir de un config se traen los componentes y estos van trabajando acorde a lo requerido

Screen
  componentes en el screen
  componente compose que renderea componentes hijos
  rendereo el connect component


En base a una configuracion x, el jugador debe  ir pasando las etapas de manera secuencial

Pantalla 1: Comenzar Juego
AchievedPoint: cuando el usuario presiona Start. se debe ir a la pantalla 2
ExpectedData: { screenNumber:2, authCode:''}

Pantalla 2: Seleccionar Personaje
AchievedPoint: cuando eligio personaje o eligio nuevo personaje
ExpectedData: { screenNumber:X, authCode:'', CharacterData:{}}

Pantalla 3: Nuevo Personaje
AchievedPoint: Cuando el usuario lleno todos los campos y dio Start
ExpectedData: { screenNumber:4, authCode:'', newCharacterData:{}}

Pantalla 4, Nivel 1 (Tutorial):
AchievedPoint: Cuando el Personaje supero los waypoints, o cuando se clickeo SKIP
ExpectedData: ```javascript
{ waypointsMade:{}, ObjectivesCleared: {}}
```
```javascript
Objectives: [{
   name:'',
   description:'',
   isCleared:''.
   clearedCriteria:{},
   points:0,
   ObjectivesData: {
             Objects:[],
             Enemies:[],
}
}],
LIbraries: {},
```

