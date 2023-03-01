import { createBrowserRouter } from "react-router-dom"
import { Default } from "./layouts/Default"
import { Status } from "./pages/Status"
import { Timeline } from "./pages/Timeline"

export const router = createBrowserRouter([
    //Componente Default: sempre vai aparecer
    //children se refere aos componentes que fazem parte do default
    {
        path:'/',
        element:<Default/>,
        children:[
            {
                path: '/',
                element: <Timeline/>
            },
            {
                path: '/status',
                element: <Status/>
            }
        ]
    }
])