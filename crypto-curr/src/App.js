import './App.css';
import { Route,Switch, Link, BrowserRouter as Router } from "react-router-dom";
import Pagination from './components/Pagination'
import CryptoDetail from './components/CryptoDetail'
function App() {
  return (
    <div className="container">
       <Router>
                <Switch>
                    <Route exact path="/" component={Pagination} />
                    <Route exact path="/detail/:id" component={CryptoDetail} />
                </Switch>
            </Router>
    </div>
  );
}

export default App;
