import "./post.css";
import '../images/blogImage.css';



function Post(props) {
  return (
    <div className="post">

      <div className="postInfo">
       
        <h4 className="postTitle">{(props.title.toUpperCase())}</h4>
        <p className="postDes">{props.description}</p>
      <span className="stack"> <b>STACK:</b> <i>{props.stack.toUpperCase()}</i> </span>

      </div>
     
          {/* <p><span className="userStyle"> - by {props.user} </span></p> */}
    </div>
  );
}

export default Post;