import { Header } from "../Components/Header"
import { Separator } from "../Components/Separator"
import { Tweet } from "../Components/Tweet"
import "./Status.css"

const answers = [
    "Concordo",
    "Olha, faz sentido",
    "hehehehe"
]

export function Status(){
    return(
        <main className='status'>
          <Header title='Tweet'/>
          
          <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, incidunt est rem qui ex necessitatibus vitae vero quaerat nostrum officia iste aut dolorum, expedita in perspiciatis repudiandae quae repellat illum?"/>
          <Separator/>
          <form action="" className="answerTweetForm">
            <label htmlFor="tweet">
              <img src="https://github.com/LuisFernandoPBPereira.png" alt="Ícone de Perfil" />
              <textarea id='tweet' placeholder="Tweet your answer"></textarea>
            </label>
            <button type='submit'>Answer</button>
          </form>
          {answers.map((answer, index) => {
            return(
              <Tweet key={index} content={answer}/>
            )
          })}
        </main>
    )
}