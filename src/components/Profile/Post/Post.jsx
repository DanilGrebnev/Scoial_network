import classes from './Post.module.css'
function Post({text, likeCount}){

    return(
        <div className={classes.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-koA189KpuZDTSkgT41Wr68xwg0ugUGb71IdwbDh42DQ7wDkrXz0LsINnJpCByRkD0RM&usqp=CAU'></img>
            {text}
            <div>like <span>{likeCount}</span></div>
        </div>
    )
}
export default Post;