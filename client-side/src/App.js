import Header from "./Components/Header/Header";
import './App.css'
import Categories from "./Components/Categories/Categories";
import Poster from "./Components/Poster/Poster";
import PostContainer from "./Components/PostContainer/PostContainer";

import { useState } from "react";
import Loginpage from "./Components/Loginpage/Loginpage";

function App() {
  const [login, setlogin] = useState(false);  //control the login page mounting
  console.log("app component");
  return (
    <div>
      <Header setlogin={setlogin} />
      <Categories />
      <Poster/>
      <PostContainer/>
      {login && <Loginpage setlogin={setlogin}/>}
    </div>
  );
}

export default App;
