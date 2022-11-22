import "./post.css"

export default function Post(props){
    return (
        <div className="cardContainer">
            <div className="postCard">
                <h3>{props.title}</h3>
                <h4>{props.author}</h4>
                <p>{props.projectDescription}</p>
                <h5>{props.languages}</h5>
            </div>
        </div>    
    )
}