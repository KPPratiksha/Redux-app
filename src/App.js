
import { Provider } from 'react-redux';
import './App.css';
import Navbar from './Component/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import store from './Store/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      
      
    </div>
  );
}

export default App;
