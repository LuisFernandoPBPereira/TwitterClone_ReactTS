import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"
import {Link} from "react-router-dom"
import "./Tweet.css"
interface TweetProps{
  content: string
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status"className="tweet">
        <img src="https://github.com/LuisFernandoPBPereira.png" alt="Ícone de Perfil" />
        <div className="tweetContent">
          <div className="tweetContentHeader">
            <strong>Luis Fernando</strong>
            <span>@LuisPudim</span>
          </div>
          <p>
            {props.content}
          </p>
          <div className="tweetContentFooter">
            <button>
              <ChatCircle/>
              20
            </button>
            <button>
              <ArrowsClockwise/>
              20
            </button>
            <button>
              <Heart/>
              20
            </button>
          </div>
          
        </div>
    </Link>
  )
}
