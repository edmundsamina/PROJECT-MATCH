import "./newPost.css";
import Button from "../button/button";



export default function NewPost(props) {
  return (
    <div className="addPostsContainer">
         <div className="formContainer">
         <div className="textContact">
    <h2>Submit your project to find mates:</h2>
    <p>Input your name, a title for your project, and in the description explain what would you do. Lastly include the technologies to be used.</p>
    <p>If you find any errors please report it to noreply@fakeemail.com and we'll sort it out.</p>
         </div>
        <form className="form">
        <input placeholder= "Name"/>
        <input placeholder= "Project title"/>
        <input placeholder= "Description" maxLength="10"/>
        <input placeholder= "Stack to use"/>
        <Button/>
      </form>
    </div>
    </div>
   
  );
}

