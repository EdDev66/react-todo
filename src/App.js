import { Fragment, useContext } from 'react';
import HomeScreen from './screens/HomeScreen';
import TaskState from './context/Tasks/TaskState';
import NavbarComponent from './components/mainScreen/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AuthState from './context/Auth/AuthState';
import AuthContext from './context/Auth/authContext';

function App() {

  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  return (
    <BrowserRouter>
        <TaskState>
        {/* <AuthState> */}
        <NavbarComponent />
        <Routes>
          <Fragment>
            <Route path='/' element={<HomeScreen />}/>
            <Route path='/login' element={isAuthenticated ? <HomeScreen /> : <Login />}/>
            <Route path='/register' element={isAuthenticated ? <HomeScreen /> : <Register />}/>
          </Fragment>
        </Routes>
        {/* </AuthState> */}
        </TaskState>
    </BrowserRouter>
  );
}

export default App;
