import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state'


function rerenderEntireThree (state) {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter >
        <App 
        state={state} 
        dispatch={store.dispatch.bind(store)} 
        posts={store.getState().posts} 
        messagesData={store.getState().messagesData} 
        dialogsData={store.getState().dialogsData} 
        newPostText={store.getState().newPostText} 
        />
      </BrowserRouter >
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireThree(store.getState())
store.subscribe(rerenderEntireThree);




