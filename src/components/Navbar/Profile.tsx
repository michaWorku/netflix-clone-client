import { FC } from 'react'
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./Navbar.scss";

const Profile : FC = () => {
  return (
    <div className="nav-right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => {}}>Logout</span>
            </div>
          </div>
    </div>
  )
}

export default Profile