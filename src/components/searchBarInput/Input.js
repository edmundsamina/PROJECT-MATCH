function SearchBarInput(props) {
  return (

      <input className="search-bar-input" placeholder= "Search By Tech Stack" onChange={props.onChange} />
    
  );
}

export default SearchBarInput;
