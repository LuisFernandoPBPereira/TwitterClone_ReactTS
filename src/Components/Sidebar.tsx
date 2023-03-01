import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from "phosphor-react"
import {Link, NavLink} from "react-router-dom"
import logoTwitter from "../assets/logo-twitter.svg"
import "./Sidebar.css"

export function Sidebar() {
  return (
    <aside className='sidebar'>
        <img className='logo' src={logoTwitter} alt="Logo" />
        <nav className='mainNavigation'>
          <NavLink  to="/"> <House weight='fill'/> Home</NavLink>
          <a href=""> <Hash />           Explore</a>
          <a href=""> <Bell/>            Notifications</a>
          <a href=""> <Envelope/>        Messages</a>
          <a href=""> <BookmarkSimple/>  Bookmarks</a>
          <a href=""> <FileText/>        Lists</a>
          <a href=""> <User/>            Profile</a>
          <a href=""> <DotsThreeCircle/> More</a>
        </nav>
        <button className='newTweet' type='button'>Tweet</button>
      </aside>
  )
}
