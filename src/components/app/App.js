
import './App.css';
import SearchBarInput from '../searchBarInput/Input';
import Button from '../button/button';
import {useState} from 'react';


function App() {
  const [search, setSearch] = useState("");
function handleSearch(e) {
  let search = e.target.value;
  setSearch(search);
  console.log(search) };

async function handleClick() {
  const response = await fetch(`SELECT * FROM customers WHERE language = $1`,[search]);

  console.log(response)

}

  return (
    <div className="app">
     <div className = "postsContainer">
     THIS IS TO SEARCH POSTS
     <SearchBarInput onChange={handleSearch} />
      <Button onClick={handleClick}/>
      </div>
     
      <div className = "addPostsContainer">
      THIS IS TO ADD POSTS
      </div>
      </div>
    
  );
}





export default App;
