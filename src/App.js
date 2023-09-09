import './App.css';
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import {
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
  Route,
} from "react-router-dom";
import Register from './Pages/Register/Register';
import Login from './Pages/SignIn/Login';

const router = createBrowserRouter(createRoutesFromChildren(
  <>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
    <Route path='/create-account' element={<Register />} />
    <Route path='/sign-in' element={<Login />} />
  </>
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
