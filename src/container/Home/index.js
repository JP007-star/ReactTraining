import React, { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Form } from '../../components/Form';
import { Header } from '../../components/Header'
import  MyComponent  from '../../components/MyComponent';
import NewComponent from '../../components/NewComponent';
import { Timer } from '../../components/Timer';
import Switch from '../../components/Switch';



/**
* @author
* @function NewComponent
**/

export const Home = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };
  return(
    <>
      <Header className={currentTheme}/>
      <Switch checked={isToggled} onChange={handleToggle} />
      <Footer className={currentTheme}/>
    </>
     
   )

 }