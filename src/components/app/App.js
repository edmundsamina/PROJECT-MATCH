import Header from "../header/header";
import "./App.css";
import SearchBarInput from "../searchBarInput/Input";
import Button from "../button/button";
import { useState } from "react";
import NewPost from "../newPost/newPost";
import Posts from "../posts/posts";

function App() {
  const [search, setSearch] = useState("");
  function handleSearch(e) {
    let search = e.target.value;
    setSearch(search);
    console.log(search);
  }

  async function handleClick() {
    const responseJSON = await fetch(
      "http://localhost:3001/api/customer/search=$1",
      [search]
    );
    const response = await responseJSON.json();
    console.log(response);
  }

  return (
    <>
    
     <Header />
    <div className="app">
     

    
      <div className="postsContainer">
        <div className="searchBarContainer">
        
          <h1> CodeMerge </h1>

          <SearchBarInput onChange={handleSearch} />
          <Button onClick={handleClick} text="click me" />
        </div>
         
      </div>
       <Posts />
      {/* second page begins here, maybe make a second component for the next page?  <NewPost />*/ }
       
    </div>
    <NewPost />
    </>
  );
}

export default App;
