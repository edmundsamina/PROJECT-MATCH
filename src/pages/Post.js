import NewPost from "../components/newPost/newPost.js";
import spaceman from '../fonts_images/space-astronaut-man.png'
import spacewoman from '../fonts_images/space-woman-astronaut-in-a-helmet.png'
import './post.css'
import { motion } from "framer-motion";


export default function PostPage(){
    return (
        <section
        
        className="post-page">
        <motion.img 
        initial={{opacity: 0} }
        animate={{opacity: 1} }
        transition={{ duration: 0.5 }} 
        className="post-image img-one" src={spacewoman}/>
            
            <NewPost/>
            <motion.img 
            initial={{opacity: 0} }
        animate={{opacity: 1} }
        transition={{ duration: 0.5 }} 
            className="post-image img-two" src={spaceman}/>
        </section>
    )
}