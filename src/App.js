import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LogInPage/index.js';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home/index.js';
import Space from './Pages/Space/index.js';
import Answer from './Pages/Answer/index.js';
import GroupPage from './Pages/Space/groupPage.js';
import UserContextProvider from './contexts/user-context.js';
import Search from './Pages/Search/index.js';
import User from './Pages/UserPage/index.js';
import Following from './Pages/Following/index.js';
import Notification from './Pages/Notification/index.js';
import Layout from './layout/index.js';
import Protected from './protected/index.js';


function App() {
  return (
    <>
      <ToastContainer />
      <UserContextProvider>
        <div className="App">
          <Routes>
            <Route path='/auth' element={<LoginPage />} />
            
            <Route path='/' element={<Protected>
              <Layout />
            </Protected>
           }>
              <Route path='/home' element={<Home />} />
              <Route path='/spaces' element={<Space />} />
              <Route path='/group/:id' element={<GroupPage />} />
              <Route path='/answer' element={<Answer />} />
              <Route path='/following' element={<Following />} />
              <Route path='/notifications' element={<Notification />} />
              <Route path='/search' element={<Search />} />
              <Route path='/user' element={<User />} />
            </Route>
          </Routes>
        </div>
      </UserContextProvider>
    </>
  );
}

export default App;
