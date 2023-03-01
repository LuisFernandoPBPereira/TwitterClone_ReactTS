import { Sparkle } from "phosphor-react";
import "./Header.css"

interface HeaderProps{
    title: string
}

export function Header(props:HeaderProps){
    return(
        <div className="timeLineHeader">
            {props.title}
            <Sparkle/>
        </div>
    )
}