//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (
    <BrowserRouter className='App'>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer />}/>
        <Route exact path='/category/:nombreCategoria' element={<ItemListContainer />}/>
        <Route exact path='/category' element={<ItemListContainer />}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
