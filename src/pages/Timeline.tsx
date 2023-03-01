import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../Components/Header"
import { Separator } from "../Components/Separator"
import { Tweet } from "../Components/Tweet"
import "./Timeline.css"


export function Timeline(){
    //o React monitora os estados e reage conforme suas mudanças
    const [newTweet, setNewTweet] = useState("")
    const [tweets, setTweets] = useState([
        "Hoje eu fiz meu primeiro delete sem 'where', será que vou de comes e bebes?",
        "Fui me candidatar numa vaga de estágio, e ela pedia 3 anos de experiência, como que tanka?"
    ])
    function createNewTweet(event: FormEvent){
        event.preventDefault()
        
        //newTweet: Coloca novos tweets na tela
        //...tweets, repete os tweets já existentes
        //setNewTweet(""): Deixa o textarea vazio
        setTweets([newTweet, ...tweets])
        setNewTweet("")

    }

    function handleHotKeySubmit(event: KeyboardEvent){
        if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
            setTweets([newTweet, ...tweets])
            setNewTweet("")
        }
    }

    return(
        <main className='timeLine'>
          <Header title='Home'/>

          <form onSubmit={createNewTweet} className="newTweetForm">
            <label htmlFor="tweet">
              <img src="https://github.com/LuisFernandoPBPereira.png" alt="Ícone de Perfil" />
              <textarea 
                id='tweet' 
                placeholder="What's happening?"
                value={newTweet}
                onKeyDown={handleHotKeySubmit}
                onChange={(event) => {
                    //Pegamos o valor digitado e salvamos seu estado 
                    setNewTweet(event.target.value)
                }}/>
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