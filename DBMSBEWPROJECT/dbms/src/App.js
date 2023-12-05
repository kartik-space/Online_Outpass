
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Accounts from './Components/Pages/Accounts';
import Exams from './Components/Pages/Exams';
import Hosstel from './Components/Pages/Hosstel';
import Outpass from './Components/Pages/Outpass';
import Review from './Components/Pages/Review';
import Users from './Components/Pages/Users';
import Home from './Home';
import Login from './Login';
import Signin from './Signin';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/register' element={ <Signin />}></Route>
        <Route path='/users' element={ <Users />}></Route>
        <Route path='/outpass' element={ <Outpass />}></Route>
        <Route path='/hostel' element={ <Hosstel />}></Route>
        <Route path='/exams' element={ <Exams />}></Route>
        <Route path='/accounts' element={ <Accounts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
