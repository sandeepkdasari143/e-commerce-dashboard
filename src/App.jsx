import React from 'react';
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
import Products from './Admin-Dashboard/pages/Products';

const App = () => {

  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // If the "theme" value of the context changes, then this useEffect will be called...
  React.useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[theme])

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
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/dashboard" element={<AdminProtectedRoute><DashboardHome /></AdminProtectedRoute>} />
        <Route path="/dashboard/products" element={<AdminProtectedRoute><Products /></AdminProtectedRoute>} />
        <Route path="/dashboard/orders" element={<AdminProtectedRoute><Orders /></AdminProtectedRoute>} />
        <Route path="/dashboard/transactions" element={<AdminProtectedRoute><Transactions /></AdminProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App