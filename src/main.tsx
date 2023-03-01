import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css"

import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import { Tweet } from './Components/Tweet'
import { Separator } from './Components/Separator'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Timeline } from './pages/Timeline'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
