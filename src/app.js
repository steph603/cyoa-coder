import React from "react";
import ReactDOM from "react-dom";
import pages from "./pages/index";

// Components
import Book from "./components/book";

// const cyoa = (
//   <div id="wrapper">
//     <Page />
    <h1>{pages[0].title}</h1>
    <p>{pages[0].text}</p>

    <ul>
      {pages[0].options.map(function (option) {
        return (
          <li>
            <button
              //  onClick={turnPage()}
              key={option.text}
            >
              {option.text}
            </button>
          </li>
//         );
//       })}
//     </ul>
//     <p> Meow </p>
//   </div>
// );

var appRoot = document.getElementById("app");

ReactDOM.render(<Book />, appRoot);
