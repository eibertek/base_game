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

