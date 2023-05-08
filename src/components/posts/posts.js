import "./posts.css";
import Post from "../post/post";




export default function Posts({data}) {


    return (

        <div className="posts">
      

            {data.map((item)=>{
                return <Post title={item.title} user= {item.user_name} stack = {item.stack} description = {item.description}/>
            })}
  
        </div>
  )
          
}


