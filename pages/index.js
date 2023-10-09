// обязательно указывается импорт
// import React from "react"
// import * as ReactDOMClient  from "react-dom/client"; // подключение библиотеки чтобы работал новый render
import HomePage from './App'
// import React, { useEffect } from 'react';

// function IndexComponent(){
//   useEffect(() => {
//     if (typeof document !== 'undefined') {
//       // Код, требующий доступ к document
//       const app = ReactDOMClient.createRoot(document.getElementById(".app")) //используется новый метод вместо рендер
//       app.render(<HomePage />)
//     }
//   }, []);
// }
// export default IndexComponent
// const doc = document.documentElement
// document.addEventListener('DOMContentLoaded', function() {
//     const app = ReactDOMClient.createRoot(document.querySelector("app")) //используется новый метод вместо рендер
//     app.render(<HomePage />)
//     console.log('DOM загружен!');
//   });

if (typeof document !== 'undefined') {
    // const rootElement = document.getElementById('app');
    // ReactDOM.render(<HomePage />, rootElement);
        const app = ReactDOMClient.createRoot(document.querySelector("app")) //используется новый метод вместо рендер
    app.render(<HomePage />)
  }




