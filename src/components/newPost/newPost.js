import "./newPost.css";
import Button from "../button/button.js";
import newPost from "../../fonts_images/newPost.png";
import { useState } from "react";
import swal from 'sweetalert';

const url = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:3000";

export default function NewPost() {


  const [payload,setPayload]= useState({
      user_name : null,
      title : null ,
      description : null,
      stack: null

  })

  function onChangeName(e) {
    let text = e.target.value;
    setPayload({...payload,  user_name : text });
  }
  function onChangeTitle(e) {
    let text = e.target.value;
    setPayload({ ...payload, title : text } );
  }
  function onChangeDes(e) {
    let text = e.target.value;
    setPayload({...payload,  description : text } );
  }
  function onChangeStack(e) {
    let text = e.target.value;
    setPayload( { ...payload, stack : text } );
  }

  async function onClick(e) {
    e.preventDefault();
    let obj = { user_name: payload.user_name, title: payload.title, description: payload.description, stack: payload.stack };
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

  }
  


  return (
  
      <div className="newPost-container">

        <form className="form">
          <label> Username: </label>
          <input
            value = {payload.user_name}
            type="text"
            userName="userName"
            placeholder="Username"
            maxlength="20"
            required
            onChange={onChangeName}
          />

          <label> Title: </label>
          <input
          value = {payload.title}
            type="text"
            userName="title"
            placeholder="Project Title"
            maxlength="30"
            required
            onChange={onChangeTitle}
          />

          <label> Stack: </label>
          <input
          value = {payload.stack}
            type="text"
            userName="stack"
            placeholder="Stack"
            maxlength="50"
            required
            onChange={onChangeStack}
          />

          <label> Describe your project: </label>
          <textarea
          value = {payload.description}
            userName="description"
            placeholder="Description..."
            maxlength="200"
            required
            onChange={onChangeDes}
          ></textarea>

          <Button className="button" onClick={onClick} />
        </form>
      </div>
  
  );
}
