import { useState, useEffect } from "react";
import SearchBarInput from "../components/searchBarInput/Input";
import Button from "../components/button/button";
import Posts from "../components/posts/posts";
import './search.css'

export default function SearchPage() {
  const [search, setSearch] = useState();
  const [data, setData] = useState(null);

  useEffect(() => { 
    async function getData() {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/post/`
      );
      const data = await response.json();
      setTimeout(()=> {
        setData(data.payload);

      }, 2000)
      console.log(data)
    }
    getData();
  }, []);

  function handleSearch(e) {
    let search = e.target.value;
    setSearch(search);
  }

  async function handleClick() {
    const responseJSON = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/post/?stack=${search}`
    );
    const response = await responseJSON.json();
    setData(response.payload);
    console.log(response.payload);
  }

  return (
    <div className="search-container">
    <div className="search-bar-container">


    <SearchBarInput onChange={handleSearch} />
      <Button
        onClick={() => {
          handleClick();
        }}
        className="search-button"
        text="search"
      />
    </div>
     

    { data ?  <Posts data={data} /> : <div className="empty-posts">
    <div class="spinner">
    <div class="spinner1"></div>
</div> </div>

}
     
    </div>
  );
}
