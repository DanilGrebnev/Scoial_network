import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/header/Header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import {Routes, Route} from "react-router-dom";






const App = ({updateNewPostText, newPostText, posts, dialogsData, messagesData, addPost, }) => {
 return(
    <div className="app-wrapper">
          <Header />
          <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/Profile/Profile/*' element={<Profile 
              updateNewPostText={updateNewPostText} 
              newPostText={newPostText} 
              posts={posts} 
              addPost={addPost}
              />}
            />
            <Route  path='/Dialogs/Dialogs' element={<Dialogs dialogsData={dialogsData} messagesData={messagesData} />} />
          </Routes>
        </div>
    </div>
    )
}



export default App;
