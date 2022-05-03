import './App.scss'
import Header from './components/Header/index'
import Main from './components/Main/index'
import Footer from './components/Footer/index'
import { Router } from 'react-router-dom'
import createHistory from "history/createBrowserHistory"

function App() {
  return (
    // <div className='wrapper'>
    <Router history={createHistory()}>
      <Header/>
      <Main/>
      <Footer/>
    </Router>
    // </div>
  );
}

export default App;
