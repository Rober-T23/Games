import './App.css';
import {Redirect, Route, Switch } from 'react-router-dom';
import Home from './Componets/Home/Home'
function App() {
  return (
    <div className="App">
       <Switch>
        {/* <Route path="/" exact render={() => <Landing />} /> */}

        <Route path="/Home" component={Home} />
        {/* <Route path="/newComponet" exact render={() => <Newcomponent />} />
        <Route path="/addrecipe" exact render={() => <Recipes />} />
        <Route path="/details/:id" exact render={() => <Details />} /> */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
