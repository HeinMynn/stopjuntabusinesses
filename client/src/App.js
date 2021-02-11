import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import "reactjs-popup/dist/index.css";
import Home from "./components/Home";
import Navbar from "./components/Nav/Navbar";
// import PartiList from './components/PartiList';
import Hitstop from './components/Hitstop';
import JuntaList from "./components/JuntaList";
import PublicShame from "./components/PublicShame";
import MobileNav from "./components/Nav/MobileNav";

function App() {
  return (
    <Router>
      <div className="max-w-full">
        <Navbar />
        <Switch>
          <Route path="/publicshame" component={PublicShame} />
          <Route path="/hitstop" component={Hitstop} />
          <Route path="/juntabusinesses" component={JuntaList} />
          <Route exact path="/" component={Home} />
        </Switch>
        <div className="h-16 md:hidden"></div>
        <MobileNav />
      </div>
    </Router>
  );
}

export default App;