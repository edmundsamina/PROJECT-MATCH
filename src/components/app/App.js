
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
  const responseJSON = await fetch('http://localhost:3001/api/customer/1');
  const response = await responseJSON.json();
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
