import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../Components/Header"
import { Separator } from "../Components/Separator"
import { Tweet } from "../Components/Tweet"
import "./Status.css"

/**
 * Fluxo de Renderização:
 * 1. Toda vez que alteramos o estado de um compontente, todo o componente é recalculado
 * 2. Toda vez que seu componente pai renderizar
 * 3. Toda vez que alguma de suas propriedades mudarem
 * 
 * Algoritmo de Reconciliação:
 * 1. Criar em memória a nova versão do HTML do componente
 * 2. Compara essa nova versão com a versão anterior ao HTML (Diff)
 * 3. Aplicar as operações JavaScript para alterar somente o necessário no HTML
 */

export function Status(){
    //o React monitora os estados e reage conforme suas mudanças
    const [newAnswer, setNewAnswer] = useState("")
    const [answers, setAnswers] = useState([
        "Concordo",
        "Olha, faz sentido",
        "hehehehe"
    ])
    function createNewTweet(event: FormEvent){
        event.preventDefault()

        //newTweet: Coloca novos answers na tela
        //...answers, repete os answers já existentes
        //setNewTweet(""): Deixa o textarea vazio
        setAnswers([newAnswer, ...answers])
        setNewAnswer("")

    }

    function handleHotKeySubmit(event: KeyboardEvent){
        if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
            setAnswers([newAnswer, ...answers])
            setNewAnswer("")
        }
    }

    return(
        <main className='status'>
          <Header title='Tweet'/>
          
          <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, incidunt est rem qui ex necessitatibus vitae vero quaerat nostrum officia iste aut dolorum, expedita in perspiciatis repudiandae quae repellat illum?"/>
          <Separator/>
          <form onSubmit={createNewTweet} className="answerTweetForm">
            <label htmlFor="tweet">
              <img src="https://github.com/LuisFernandoPBPereira.png" alt="Ícone de Perfil" />
              <textarea 
                id='tweet' 
                placeholder="Tweet your answer"
                onKeyDown={handleHotKeySubmit}
                onChange={(event) => {
                    setNewAnswer(event.target.value)
                }}/>            
            </label>
            <button type='submit'><PaperPlaneRight/><span>Answer</span></button>
          </form>
          {answers.map((answer, index) => {
            return(
              <Tweet key={index} content={answer}/>
            )
          })}
        </main>
    )
}