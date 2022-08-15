import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Provider } from '../Provider'
import SelectBlock from "../SelectBlock/index"
import TableBlock from "../TableBlock/index"
import './index.scss'

const ProjectPage = () =>
<div>
    <Provider>
        <SelectBlock />
        <TableBlock />
    </Provider>
    
</div>
       
const ErrorPage = () =>
<p>Not Found</p>
    
const Main = () =>
    <main className="main">
        <div className="main__conteiner _conteiner">
            <Routes>
                <Route path='/projects' element={<ProjectPage/>} />
                <Route path='*' element={<ErrorPage/>} />
            </Routes>
        </div>
    </main> 


export default Main
