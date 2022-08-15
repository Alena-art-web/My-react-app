import './App.scss'
import Header from './components/Header/index'
import Main from './components/Main/index'
import Footer from './components/Footer/index'
import { Routes } from 'react-router-dom'

function App() {
  return (
    // <div className='wrapper'>
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
    // </div>
  );
}

export default App;
