import React from 'react'
import ReactDOM from 'react-dom/client'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Sparkle, User } from "phosphor-react"
import "./global.css"
import logoTwitter from "./assets/logo-twitter.svg"
import { Tweet } from './Components/Tweet'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <aside className='sidebar'>
        <img className='logo' src={logoTwitter} alt="Logo" />
        <nav className='mainNavigation'>
          <a className='active' href=""> <House weight='fill'/> Home</a>
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
      <div className="content">
        <main className='timeLine'>
          <div className="timeLineHeader">
            Home
            <Sparkle/>
          </div>
          <form action="" className="newTweetForm">
            <label htmlFor="tweet">
              <img src="https://github.com/LuisFernandoPBPereira.png" alt="Ícone de Perfil" />
              <textarea id='tweet' placeholder="What's happening?"></textarea>
            </label>
            <button type='submit'>Tweet</button>
          </form>
          <div className="separator"></div>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
