import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LogInPage/index.js';
import 'react-toastify/dist/ReactToastify.css';
import { Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home/index.js';
import Space from './Pages/Space/index.js';
import Answer from './Pages/Answer/index.js';
import GroupPage from './Pages/Space/groupPage.js';
import UserContextProvider from './contexts/user-context.js';


function App() {
  return (
    <>
      <ToastContainer />
      <UserContextProvider>
        <div className="App">
          <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/space' element={<Space/>}/>
            <Route path='/answer' element={<Answer/>}/>
            <Route path='/group/:id' element={<GroupPage/>}/>
          </Routes>
        </div>
      </UserContextProvider>
    </>
  );
}

export default App;
