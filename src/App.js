import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Item from './components/Items/Item'
import ItemList from './components/Items/ItemList'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <div>
          <ItemList />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

