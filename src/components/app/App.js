import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../../pages/Home";
import SearchPage from "../../pages/Search";
import PostPage from "../../pages/Post";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<SearchPage/>}/>
      <Route  path="/post" element={<PostPage/>}/>
    </Routes>
    

  
  );
}

export default App;
