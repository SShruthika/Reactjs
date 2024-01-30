// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login";
import Home from "./component/Home";
import Signup from "./Formik program/Signup";
import About from "./component/About";
import Contact from "./component/Contact";
import Homes from "./component/Homes";
import Navbar from "./component/Navbar";

function App() {
   return (
     <div>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Home/:names" element={<Home/>}/>
        {/* <Route path="/Navbar/" element={<Navbar/>}/> */}
        <Route path="/Homes/" element={<Homes/>}></Route>
        <Route path="/Signup/" element={<Signup/>}></Route>
        <Route path="/Navbar/" element={<Navbar/>}/>
       <Route path="/About/" element={<About/>}/>
          <Route path="/Contact/" element={<Contact/>} />
{/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
   )
}
export default App;


// import React from 'react'
// import Portfolio from './component/imgapi/Api'

// const App = () => {
//   return (
//     <div>
//       <Portfolio/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Crud from './component/Crud'
// // import Axios from './component/Axios'

// const App = () => {
//   return (
//     <div>
//       <Crud/>
//       {/* <Axios/> */}

//     </div>
//   )
// }

// export default App

