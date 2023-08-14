// import 'bootstrap/dist/css/bootstrap.min.css';
import MessageBar from "./MessageBar"
import Sidebar from "./Sidebar"
import Test from "./Test"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddEntry from './AddEntry';
import Head from './Head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetSectors from './GetSectors';



const App = () => {
  return (
    <>

      {/* <Router>
        <Head/>
        <Routes>
          
          <Route path='/' element={<Test/>}/>
          <Route path='/add-entry' element={<AddEntry/>}/>
          <Route path='/get-entry' element={<GetSectors/>}/>
        </Routes>
      </Router>
      <ToastContainer/> */}
      <main>
        <Sidebar/>
        <MessageBar/>
      </main>
    </>
  )
}

export default App
