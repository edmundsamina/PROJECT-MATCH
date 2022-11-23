import "./post.css";
import BlogImage from "../images/blogImage";
import '../images/blogImage.css';



function Post(props) {
    return (
      <div className="post">
 <BlogImage  /> 
    
        
          <div className="postInfo">

            <div className="postCategories">
              
         <span className="postCat">JavaScript</span>
          <span className="postCat">User01</span>
         
         </div>
          <span className="postTitle">POST TITLE </span>
          <hr/> 

          <span className="postDate">Posted 1 hour ago</span>
        </div>
   <p classname="postDes"> sfdjghejgehjdvhfvsnv'lsdkvnd
    sdvlkjfdnsglfknvfs'klvnsflksnfs'fksdfdsklf
    sdcljsdnsfjsdfnsdjnfds
    glfknvfs'klvnsflksnfs'fksdfdsklvfddd
   </p>
          </div>
    ) 
}


export default Post;