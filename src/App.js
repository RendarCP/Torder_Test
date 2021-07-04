import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Item from './components/Items/Item'
import ItemList from './components/Items/ItemList'
import Footer from './components/Footer/Footer'
import Torder from './pages/Torder'
import Order from './pages/Order'

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Torder} />
            <Route exact path="/order" component={Order} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

