import './App.css';
import {Redirect, Route, Switch } from 'react-router-dom';
import Home from './Componets/Home/Home'
import Details from './Componets/Details/Details'
import Add from './Componets/AddGames/AddGames'
import Landing from './Componets/landig/Landing';
function App() {
  return (
    <div className="App">
       <Switch>
        <Route path="/" exact render={() => <Landing />} /> 

        <Route path="/Home" component={Home} />
        <Route path="/Details/:id" component={Details} />
        <Route path="/Add" component={Add} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
