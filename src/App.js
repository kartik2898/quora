import logo from './logo.svg';
import './App.css';
import LoginPage from './LogInPage/index.js';
import Header from './Components/Header/index.js';
import 'react-toastify/dist/ReactToastify.css';
import { Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home/index.js';


function App() {
  return (
    <>
      <ToastContainer />
      <div className="App">
        {/* <Routes>
          <Route path='/' element={<LoginPage/>}/>
        </Routes> */}
        {/* <Header/>  */}
        {/* <SideBar/> */}

        {/* <Cards/> */}

        <Home/>

      </div>
    </>
  );
}

export default App;
