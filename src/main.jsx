import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './hader'
import GeneralInfo from './general'
import Education from './education'
import WorkHistry from './workHistory'
import "./styles/main.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <GeneralInfo />
    <Education />
    <WorkHistry />
  </StrictMode>,
)
