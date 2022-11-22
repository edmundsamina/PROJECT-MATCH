import Header from "../header/header";
import "./App.css";
import SearchBarInput from "../searchBarInput/Input";
import Button from "../button/button";
import { useState } from "react";
import AddPost from "../addPost/addPost";
import Post from "../posts/post";

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
    <div className="app">
      <Header />
      <div className="postsContainer">
        <div className="searchBarContainer">
          <SearchBarInput onChange={handleSearch} />
          <Button onClick={handleClick} text="click me" />
        </div>
          <Post />
      </div>
      {/* second page begins here, maybe make a second component for the next page?*/}
        <AddPost />
    </div>
  );
}

export default App;
