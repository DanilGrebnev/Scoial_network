import classes from'./NavBar.module.css'
import { NavLink } from 'react-router-dom';

function NavBar(){
    return(
        <nav className={classes.nav}>
          <NavLink  activeClassName='active'  to='/Profile/Profile' className={classes.item}>Porfile</NavLink>
          <NavLink activeClassName='active' to='/Dialogs/Dialogs' className={classes.item}>Dialogs</NavLink>
          <NavLink activeClassName='active'  to=""className={classes.item}>News</NavLink>
          <NavLink activeClassName='active'  to="" className={classes.item}>Settings</NavLink>
        </nav>
    )
}

export default NavBar;