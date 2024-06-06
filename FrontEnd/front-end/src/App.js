import logo from './logo.svg';
import Home from './components/Home';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Shopping_cart from './components/Shopping_cart';
import Profile from './components/Profile';
import Order from './components/Order';
import { store } from './components/Store';
import { Provider } from 'react-redux';
import MapContainer from './components/MapContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from './components/Login';
import Payment from './components/Payment';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/Profile' component={Profile} />
           <Route exact path='/home' component={Home} />
           <Route exact path='/Products' component={Products} />
           <Route exact path='/Shopping_cart' component={Shopping_cart} />
           <Route exact path='/MapContainer' component={MapContainer} />
           <Route exact path='/order' component={Order} />
           <Route exact path='/Payment' component={Payment} />

          </Switch>

        </Router>
      </Provider>
 
    </div>
  );
}

export default App;
