import './App.css';
import Home from './Component/Home';
import "bootstrap/dist/css/bootstrap.css";
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Switch>
    <Route path = "/" component={Home}></Route>
    </Switch>
     
    </div>
  );
}

export default App;
