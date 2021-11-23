import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.svg";
import s from './UserMenu.module.css';
import { getUserName } from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";
import { Avatar } from "@mui/material";

const UserMenu = () => {
  const dispatch = useDispatch();

  const usetName = useSelector(getUserName);
  return (
    <ul className={s.navList}>
      <li className={s.navItem_left}>
        <NavLink to="/">
          <img src={logo} className={s.logo} alt="" />
          </NavLink>
        </li>
        <li className={s.navItem_left}>
        <NavLink to="/">Home</NavLink>
        </li>
        <li className={s.navItem_left}>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li className={s.navItem_right}>
          <p>Hello, {usetName}</p>
      </li>
      <li className={s.navItem_right}>
          <div><Avatar alt="" src="/static/images/avatar/1.jpg" /></div>
        </li>
      <button className={s.navItem_right} onClick={() => dispatch(logOut())} type='button'>LogOut</button>
      </ul>
  )
}

export default UserMenu;