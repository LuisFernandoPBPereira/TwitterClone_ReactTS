import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"
import "./Tweet.css"

export function Tweet() {
  return (
    <a href="#"className="tweet">
        <img src="https://github.com/LuisFernandoPBPereira.png" alt="Ícone de Perfil" />
        <div className="tweetContent">
          <div className="tweetContentHeader">
            <strong>Luis Fernando</strong>
            <span>@LuisPudim</span>

            <p>
              Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: <br />
              <br />
              ✅ npm start: De 32s para 400ms (sim, demorava 30s) <br />
              ✅ npm build: De 120s para 22s <br />
              <br />
              Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥<br />
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
        </div>
    </a>
  )
}
