
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

function handleClick() {
console.log("clicked")
}

  return (
    <div className="App">
      <SearchBarInput onChange={handleSearch} />
      <Button onClick={handleClick}/>

    </div>
  );
}





export default App;
