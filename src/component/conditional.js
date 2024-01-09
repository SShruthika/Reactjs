import React from "react";
// function MyComponent({ isLoggedIn }) {
//   if (isLoggedIn) {
//     return <p>Welcome, User!</p>;
//   } else {
//     return <p>Please log in</p>;
//   }
// }

// function MyComponent({ isLoggedIn }) {
//   return isLoggedIn ? <p>Welcome, User!</p> : <p> log in</p>;
// }

function MyComponent({ isLoggedIn }) {
  return isLoggedIn && <p>Welcome, User!</p>&&<h1>hollll</h1>;
}


export default MyComponent;

