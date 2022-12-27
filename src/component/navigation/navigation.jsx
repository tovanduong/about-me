import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import HomeIcon from "@mui/icons-material/Home";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from "react-router-dom";
import "./navigation.css";
const Navigation = () => {
  return (
    <div className="Navigation-container">
      <div className="Navigation">
        <ul className="list">
          <li className={`item `}>
            <NavLink to="/" className="link-navigation">
              <HomeIcon />
              <span> Home</span>
            </NavLink>
          </li>
          <li className={`item `}>
            <NavLink to="/messenger" className="link-navigation">
              <ChatBubbleOutlineOutlinedIcon />
              <span>Messenger</span>
            </NavLink>
          </li>
          <li className={`item `}>
            <NavLink to="/profile" className="link-navigation">
              <PersonIcon />
              <span>Profile</span>
            </NavLink>
          </li>
          <li className={`item `}>
            <NavLink to="/setting" className="link-navigation">
              <SettingsIcon />
              <span>Setting</span>
            </NavLink>
          </li>
          <li className={`item `}>
            <NavLink to="/about" className="link-navigation">
              <LogoutOutlinedIcon />
              <span>About</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
