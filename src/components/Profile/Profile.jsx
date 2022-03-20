import Post from './Post/Post';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';





function Profile({updateNewPostText, newPostText,posts, addPost}){



  const postsOut = posts.map(item => {
    return <Post 
      key={item.id} 
      
      text ={item.message} 
      likeCount={item.likeCount} 
    />
  })


    return(
        <div >
            <ProfileInfo updateNewPostText={updateNewPostText}  newPostText={newPostText} addPost={addPost} />
            <div className={classes.posts}>
            {postsOut}
            </div>
          </div>
       
    )
}
export default Profile;