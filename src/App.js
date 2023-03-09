import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header/';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path = '/' element={<HomePage/>}/>
        <Route path = '/cart' element={<CartPage/>}/>
        <Route exact path = '/game/:id' element={<ProductPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
