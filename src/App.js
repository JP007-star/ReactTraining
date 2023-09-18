import { Route,  Routes } from 'react-router-dom';
import './App.css';
import { Details } from './container/Details';
import { Home } from './container/Home';
import routes from './routes';
import MyComponent from './components/MyComponent';
import NewComponent from './components/NewComponent';
import { ThemeContainer } from './container/ThemeContainer';

function App() {
  return (
    <>
      <Routes>
        {
          routes.map(route =>
            <Route path={route.path}   element={route.element} />
          )
         
        }

        <Route path='/newCom' Component={NewComponent}/>
        <Route path='/theme' Component={ThemeContainer}/>
      </Routes>
    </>
   
  );
}

export default App;
