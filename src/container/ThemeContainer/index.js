import React, { useState } from 'react'
import theme from '../../theme';
import { ThemeProvider } from 'styled-components';
import ThemedButton from '../../components/ThemedButton/index.js';



/**
* @author
* @function ThemeContainer
**/

export const ThemeContainer = (props) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <div>
        <ThemedButton onClick={toggleTheme}>Toggle Theme</ThemedButton>
        <ThemedButton>{currentTheme === 'light' ? 'Light Theme' : 'Dark Theme'}</ThemedButton>
      </div>
    </ThemeProvider>
  );

 }