/*
 * javascript clasico
 */
ReactDOM.render(
  React.createElement('div', null,
    React.createElement(HelloWorld, { heading: true, message: "Arrancando con React"} ),
    React.createElement(HelloWorld, {message: "Esta es una prueba de React con npm, gulp, eslint y bower"}),
  ),
  document.getElementById("content")
);
