
import './button.css'


function Button(props) {
  return (
    <button className={props.text} onClick={props.onClick}>Search
    </button>
  );
}

export default Button;