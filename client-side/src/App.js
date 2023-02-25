import Header from "./Components/Header/Header";
import './App.css'
import Categories from "./Components/Categories/Categories";
import Poster from "./Components/Poster/Poster";
import PostContainer from "./Components/PostContainer/PostContainer";

function App() {
  return (
    <div>
      <Header />
      <Categories />
      <Poster/>
      <PostContainer/>
    </div>
  );
}

export default App;
