/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom'

console.log("hello")

// const HelloWorld = () => {
  
//     function sayHello() {
//       alert('Hello, World!');
//     }
    
//     return (
//       <button onClick={sayHello}>Click me!</button>
//     );
//   };
  
//   export default HelloWorld;



const App = () => {
  
    function sayHello() {
      alert('Hello, World!');
    }
    
    return (
        <>
              <button onClick={sayHello}>Click me!</button>
              <h1>Sample Componet in React!</h1>
        </>
    );
  };


  ReactDOM.render(<App />, document.getElementById('root'));