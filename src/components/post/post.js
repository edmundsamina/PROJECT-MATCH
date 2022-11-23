import "./post.css";
import BlogImage from "../images/blogImage";
import '../images/blogImage.css';



function Post(props) {
  return (
    <div className="post">
      <BlogImage />

      <div className="postInfo">
        <div className="postCategories">
        </div>
        <div className="postTitle">POST TITLE <span className="userStyle">by Marwa</span></div>
      </div>
      <p className="postDes">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
          <span className="postCat"><span className="stack">Stack:</span> Javascript, Potato, ...</span>
          <p></p>
    </div>
  );
}

export default Post;