import Header from "./Components/Header/Header";
import './App.css'


import { useState } from "react";
import Loginpage from "./Components/Loginpage/Loginpage";
import Home from "./Pages/Home";
import Categories from "./Components/Categories/Categories";
function App() {
  const [login, setlogin] = useState(false);  //control the login page mounting
  console.log("app component");
  return (
    <div>
      <Header setlogin={setlogin} />
      <Categories />
      <Home/>
      {login && <Loginpage setlogin={setlogin}/>}
    </div>
  );
}

export default App;
