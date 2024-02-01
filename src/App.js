import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LogInPage/index.js';
import 'react-toastify/dist/ReactToastify.css';
import { Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home/index.js';


function App() {
  return (
    <>
      <ToastContainer />
      <div className="App">
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/Home' element={<Home/>}/>
        </Routes>
        {/* <Home/> */}
      </div>
    </>
  );
}

export default App;
