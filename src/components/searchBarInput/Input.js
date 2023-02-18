import "./input.css";
function SearchBarInput(props) {
  return (
    <div className="search-bar-input">
      <input className="search-input"onChange={props.onChange} />
    </div>
  );
}

export default SearchBarInput;
