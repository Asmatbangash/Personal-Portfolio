import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Component/About/About.jsx'
import Skills from './Component/Skill/Skills.jsx'
import Projects from './Component/Project/Projects.jsx'
import Introduction from './Component/Home/Introduction.jsx'
import Contact from './Component/Contact/Contact.jsx'

const router = createBrowserRouter([
  {path:'/', element: <App />, children:[
  {path: '/', element: <Introduction />},
  {path:'/about', element: <About />},
  {path:'/skill', element: <Skills />},
  {path:'/project', element: <Projects />},
  {path:'/contact', element: <Contact />}
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
