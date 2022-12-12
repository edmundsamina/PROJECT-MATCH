import "./newPost.css";
import Button from "../button/button.js";
import newPost from "../../fonts_images/newPost.png";
import { useState } from "react";
import swal from 'sweetalert';

const url = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:3000";

export default function NewPost(props) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [stack, setStack] = useState("");
  // const [payload,setPayload]= useState({
  //     user_name : null,
  //     title : null ,
  //     description : null,
  //     stack: null

  // })

  function onChangeName(e) {
    let text = e.target.value;
    setName(text);
  }
  function onChangeTitle(e) {
    let text = e.target.value;
    setTitle(text);
  }
  function onChangeDes(e) {
    let text = e.target.value;
    setDes(text);
  }
  function onChangeStack(e) {
    let text = e.target.value;
    setStack(text);
  }

  async function onClick(e) {
    e.preventDefault();
    let obj = { user_name: name, title: title, description: des, stack: stack };
    // setPayload(obj)

    console.log("button clicked");
    await fetch(`${url}/api/post`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((response) => console.log(JSON.stringify(response)));

      setName("")
      setTitle("")
      setDes("")
      setStack("")

      swal("Great!", "You submitted a new project!", "success");
  }
  


  return (
    <div className="newPost">
      <h2 className="newPost-title">New Project</h2>

      <div className="newPost-container">
        <img className="newPostImage" src={newPost} alt="logo" />

        <form >
          <label> Username: </label>
          <input
            value = {name}
            type="text"
            userName="userName"
            placeholder="Username"
            maxlength="20"
            required
            onChange={onChangeName}
          />

          <label> Title: </label>
          <input
          value = {title}
            type="text"
            userName="title"
            placeholder="Project Title"
            maxlength="30"
            required
            onChange={onChangeTitle}
          />

          <label> Stack: </label>
          <input
          value = {stack}
            type="text"
            userName="stack"
            placeholder="Stack"
            maxlength="50"
            required
            onChange={onChangeStack}
          />

          <label> Describe your project: </label>
          <textarea
          value = {des}
            userName="description"
            placeholder="Description..."
            maxlength="200"
            required
            onChange={onChangeDes}
          ></textarea>

          <Button className="button" onClick={onClick} />
        </form>
      </div>
    </div>
  );
}
