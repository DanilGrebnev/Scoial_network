import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'


const DialogItem =({name, id}) => {
    return(
    <div className={classes.dialog + " " + classes.active}>
        <NavLink className={classes.linkColor} to={`/dialogs/${id}`} >{name}</NavLink> 
    </div>
    )
}
const Message =({message}) => {
return <div className={classes.message}>{message}</div>
}


const Dialogs = ({dialogsData, messagesData}) =>{


    const copyMessages = messagesData.map(item => {
    return <Message key={item.id} message={item.messages} />})

const DialogsItemCopy = dialogsData.map(item => {
    return <DialogItem key={item.id} name={item.name} id={item.id} />
})
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems }>
                {DialogsItemCopy}
             </div>   
            <div className={classes.messages}>
                {copyMessages}
            </div>
        </div>
    )
} 
export default Dialogs;