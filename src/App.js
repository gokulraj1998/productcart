
import Productlist from './component/Productlist';
import Header from './component/Header';
import Cart from './component/Cart';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes><Route path='/' element={<Productlist/>}/>
        <Route path='/restaurant/:id' element={<Cart/>}/>
      </Routes></Router>
    </div>
  );
}

export default App;
