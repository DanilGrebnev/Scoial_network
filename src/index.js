import React from 'react';
import state, { subscribe } from './redux/state'
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import{ addPost, updateNewPostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';



function rerenderEntireThree (state) {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter >
        <App 
        state={state} 
        addPost={addPost} 
        posts={state.posts} 
        messagesData={state.messagesData} 
        dialogsData={state.dialogsData} 
        newPostText={state.newPostText} 
        updateNewPostText={updateNewPostText}
        />
      </BrowserRouter >
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireThree(state)
subscribe(rerenderEntireThree);




