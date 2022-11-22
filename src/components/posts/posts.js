export default function Posts(props){
    return (
        <div className="postsCard">
            <h3>{props.title}</h3>
            <h4>{props.author}</h4>
            <p>{props.projectDescription}</p>
            <h5>{props.languages}</h5>
        </div>
    )
}