import Post from './Post/Post';
import classes from './Profile.module.css';
import MyPosts from './ProfileInfo/MyPosts';






function Profile(props){



  const postsOut = props.posts.map(item => {
    return <Post 
      key={item.id} 
      
      text ={item.message} 
      likeCount={item.likeCount} 
    />
  })


    return(
        <div >
            <MyPosts 
            dispatch={props.dispatch}  
            newPostText={props.newPostText} />
            <div className={classes.posts}>
            {postsOut}
            </div>
          </div>
       
    )
}
export default Profile;