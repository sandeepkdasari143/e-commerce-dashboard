import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_THEME } from './redux-store/theme.slice';
import ThemeSwitcher from './components/ui-components/ThemeSwitcher';

const App = () => {

  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

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
  }, [])
  
  

  return (
    <div className='transition-all duration-500 linear flex flex-col gap-5 items-center justify-center h-screen w-screen dark:bg-gray-900 bg-gray-300'>
      <h1 className='transition-all duration-500 linear dark:text-gray-100 text-gray-900 font-bold text-6xl'>Welcome, E-Commerce Application!</h1>
      <ThemeSwitcher />
    </div>
  )
}

export default App