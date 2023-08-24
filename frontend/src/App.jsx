// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MessageScreen from "./MessageScreen";
import Home from "./Home";
import Register from './Register';
import StatusSidebar from './StatusSidebar';
import Status from './Status';



const App = () => {
  return (
    <>

    <Router>
      <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/status' element={<StatusSidebar />}></Route>
          <Route path='status/status-content/:id' element = {<Status/>} />
          <Route path='/message/:id' element = {<MessageScreen/>} />
          <Route path='/' element = {<Home/>} />
      </Routes>
      </Router>
      <ToastContainer/>
    </>
  )
}

export default App
