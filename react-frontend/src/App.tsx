import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Pages/Main';
import { Provider } from "react-redux"
import store from './redux/store';
import Show from './Pages/Show';
import RegisterForm from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import AppInitializer from './Pages/Profile/Partials/Initialize/AppInitializer';
import Logout from './Pages/Auth/Logout';
import AdminPanel from './Admin/AdminPanel';
import { useRefreshToken } from './Pages/Auth/NewToken';
import useNewTabSession from './Pages/Profile/Partials/Initialize/newTabSession';

function AppContent() {

  useRefreshToken();
  useNewTabSession();
  return (
    <BrowserRouter>
      <AppInitializer />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/post/:slug' element={<Show />} />
        <Route path='register' element={<RegisterForm />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/admin/dashboard' element={<AdminPanel />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (<>
    <Provider store={store}>
      <AppContent />
    </ Provider>
  </>)
}

export default App;
