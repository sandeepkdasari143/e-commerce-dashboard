import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_THEME } from './redux-store/theme.slice';
import { Routes, Route, Navigate} from "react-router-dom";
import HomeLayout from './HomeLayout';
import Home from './pages/Home';

import LogIn from './pages/Authentication/LogIn';
import SignUp from './pages/Authentication/SignUp';

import DashboardHome from './Admin-Dashboard/pages/DashboardHome';
import Orders from './Admin-Dashboard/pages/Orders';
import Transactions from './Admin-Dashboard/pages/Transactions';
import Stock from './Admin-Dashboard/pages/Stock';
import AdminPanel from './Admin-Dashboard/pages/AdminPanel';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { darkTheme } from './lib/MUIThemeObjects/darkTheme';


const App = () => {

  const mode = useSelector(state => state.theme.mode);
  const Theme = useSelector(state => state.theme.theme);

  const [theme, setTheme] = useState(null);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  React.useEffect(() => {
    const theme = createTheme(Theme)
    setTheme(theme);
  },[Theme])

  // If the "theme" value of the context changes, then this useEffect will be called...
  React.useEffect(()=>{
    if(mode === "dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[mode])

  // For Browser Default Mode...
  React.useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      dispatch(SET_THEME('dark'))
    }else{
      dispatch(SET_THEME('light'))
    }
  }, [dispatch])

  const AdminProtectedRoute = ({children}) => {
    const isAdmin = true;
    if (isAdmin) {
      return children;
    }
    return <Navigate to="/" />
  }

  return (
    <>
      {theme && <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/admin/dashboard" element={<AdminProtectedRoute><DashboardHome /></AdminProtectedRoute>} />
          <Route path="/admin/stock" element={<AdminProtectedRoute><Stock /></AdminProtectedRoute>} />
          <Route path="/admin/orders" element={<AdminProtectedRoute><Orders /></AdminProtectedRoute>} />
          <Route path="/admin/transactions" element={<AdminProtectedRoute><Transactions /></AdminProtectedRoute>} />
          <Route path="/admin/panel" element={<AdminProtectedRoute><AdminPanel /></AdminProtectedRoute>} />
        </Routes>
      </ThemeProvider>}
    </>
  );
}

export default App