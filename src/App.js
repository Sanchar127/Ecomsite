
import './App.css';
import Home from './pages/Home'
import Cart from './pages/Cart'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
   <Provider store={store}>

   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Cart' element={<Cart/>}></Route>
   </Routes>
   </BrowserRouter>
   </Provider>
       </div>
  );
}

export default App;
