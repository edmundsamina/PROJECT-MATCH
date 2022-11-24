import "./newPost.css";
import Button from "../button/button.js"
import logo from "../../fonts_images/logo1.png"



export default function NewPost(props) {
  return (
       <div className='newPost'>
            <h2 className='newPost-title'>New Project</h2>


            <div className="newPost-container">
                <img className='newPostImage' src={logo} alt='logo'/>
                  
                <form >
                    <label> Username: </label>
                    <input type="text" userName="userName" placeholder="Username" maxlength="20" required/>

                    <label> Title: </label>
                    <input type="text" userName="title"  placeholder="Project Title" maxlength="30" required/>

                    <label> Stack: </label>
                    <input type="text" userName="stack"  placeholder="Stack" maxlength="50" required/>

                    <label> Describe your project: </label>
                    <textarea  userName="description"  placeholder="Description..." maxlength="200" required></textarea>
                   
                   
                 <Button className='button' />
                  
                </form>
                  
            </div>
        </div>
    )
}





    
   


