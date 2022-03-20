import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/header/Header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import {Routes, Route} from "react-router-dom";


const App = (props) => {
 return(
    <div className="app-wrapper">
          <Header />
          <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/Profile/Profile/*' element={
            <Profile 
              newPostText={props.newPostText} 
              posts={props.posts} 
              dispatch={props.dispatch}
              />}
            />
            <Route  path='/Dialogs/Dialogs' element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
          </Routes>
        </div>
    </div>
    )
}



export default App;
