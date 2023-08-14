// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MessageScreen from "./MessageScreen";
import Home from "./Home";



const App = () => {
  return (
    <>

    <Router>
      <Routes>
          <Route path='/message/:id' element = {<MessageScreen/>} />
          <Route path='/' element = {<Home/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
