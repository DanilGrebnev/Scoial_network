import classes from'./NavBar.module.css'
import { NavLink } from 'react-router-dom';

function NavBar(){
    return(
        <nav className={classes.nav}>
          <NavLink  to='/Profile/Profile' className={classes.item}>Porfile</NavLink>
          <NavLink to='/Dialogs/Dialogs' className={classes.item}>Dialogs</NavLink>
          <NavLink  to=""className={classes.item}>News</NavLink>
          <NavLink  to="" className={classes.item}>Settings</NavLink>
        </nav>
    )
}

export default NavBar;