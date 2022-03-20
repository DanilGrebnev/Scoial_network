import React from 'react';

const ProfileInfo =({updateNewPostText, newPostText, addPost}) => {


let getAreaValue = React.createRef();

function addNewPost(){
  addPost();
}

let onPostChange =() => {
  let text = getAreaValue.current.value;
  updateNewPostText(text);
}



return(
    <>
      <div>
      <img src='https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js=' />
      </div>
      <div>Ava + description</div>
      <div>My post</div>
      <div>
          <textarea value={newPostText} onChange={() => onPostChange()} ref={getAreaValue}></textarea>
          <button onClick={() => addNewPost()}>Add post</button>
      </div>
  </>  
    )
}
export default ProfileInfo;
   
