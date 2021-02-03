import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Nav/Navbar";
import PartiList from './components/PartiList';
import Hitstop from './components/Hitstop';
import JuntaList from "./components/JuntaList";

function App() {
  return (
    <Router>
      <div className="max-w-full">
        <Navbar  />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/participatinglist" component={PartiList} />
          <Route exact path="/hitstop" component={Hitstop} />
          <Route exact path="/juntabusinesses" component={JuntaList}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
