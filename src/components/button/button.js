
import './button.css'


function Button(props) {
  return (
    <button className={props.text} onClick={props.onClick}>{props.text}
    </button>
  );
}

export default Button;