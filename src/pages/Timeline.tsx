import { Header } from "../Components/Header"
import { Separator } from "../Components/Separator"
import { Tweet } from "../Components/Tweet"
import "./Timeline.css"

const tweets = ["opa", "opa2", "opa3"]

export function Timeline(){
    return(
        <main className='timeLine'>
          <Header title='Home'/>
          <form action="" className="newTweetForm">
            <label htmlFor="tweet">
              <img src="https://github.com/LuisFernandoPBPereira.png" alt="Ícone de Perfil" />
              <textarea id='tweet' placeholder="What's happening?"></textarea>
            </label>
            <button type='submit'>Tweet</button>
          </form>
          <Separator/>
          {tweets.map((tweet, index) => {
            return(
              <Tweet key={index} content={tweet}/>
            )
          })}
        </main>
    )
}