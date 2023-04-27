import { Route,  Routes } from 'react-router-dom';
import './App.css';
import { Details } from './container/Details';
import { Home } from './container/Home';
import routes from './routes';
import MyComponent from './components/MyComponent';
import NewComponent from './components/NewComponent';

function App() {
  return (
    <>
      <Routes>
        {
          routes.map(route =>
            <Route path={route.path} element={route.element}/>
          )
        }
      </Routes>
    </>
   
  );
}

export default App;
