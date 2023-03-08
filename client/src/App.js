import Header from "./Components/Header/Header";
import './App.css'


import { useState } from "react";

import Home from "./Pages/Home";
import Categories from "./Components/Categories/Categories";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom"
import Loginpage from "./Pages/Loginpage";
import Loginmain from "./Components/LoginComponent/Loginmain";
import Loginsms from "./Components/LoginComponent/Loginsms";
function App() {
  const [login, setlogin] = useState(false);  //control the login page mounting
  console.log("app component");
  return (
    <>
      <BrowserRouter>
        <Header setlogin={setlogin} />
        <Categories />
        <Routes>
          <Route path="/" element={<Home />} />


        </Routes>
      </BrowserRouter>
      <HashRouter>
        {login &&
          <Loginpage>
            <Routes>
              <Route path="*" element={<Loginmain setlogin={setlogin} />} />
              <Route path="/phonesms" element={<Loginsms setlogin={setlogin} />} />
            </Routes>
          </Loginpage>}
      </HashRouter>


    </>
  );
}

export default App;
