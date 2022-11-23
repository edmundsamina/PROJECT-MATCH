import "./newPost.css";
import Button from "../button/button";



export default function NewPost(props) {
  return (
    <div className="addPostsContainer">
         <div className="formContainer">
        <form className="form">
        <input placeholder= "name"/>
        <input placeholder= "project name"/>
        <input placeholder= "email"/>
        <input placeholder= "project description"/>
        <Button/>
      </form>
    </div>
    </div>
   
  );
}

