// import './App.css';
import Counter from './counter/Counter'
import Todo from './todo/Todo'
import Home from './Home';
import FindMap from './findMap/FindMap';
import PasswordGenrator from './passwordGenrator/PasswordGenrator';
import CurrConverter from './currencyConverter/CurrConverter';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    // home 
    path: "/",
    element: <Home/>
  },
  {
  path: "/findmap",
  element: <FindMap/>
  },
  {
    path: '/counter',
    element: <Counter/>
  },
  {
    path: '/todo',
    element: <Todo/>
  },
  {
    path: '/password',
    element: <PasswordGenrator/>

  },
  {
    path: '/currency',
    element: <CurrConverter/>

  }
])

function App() {

  

  return (
    <div className="App m-5">
      <RouterProvider router={router}/>

    </div>
  );
}

export default App;
