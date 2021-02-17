import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import "reactjs-popup/dist/index.css";
import Home from "./components/Home";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer";
import CDM from "./components/CDM";
import JuntaList from "./components/JuntaList";
import PublicShame from "./components/PublicShame";
import MobileNav from "./components/Nav/MobileNav";
import CDMDetail from "./components/CDMDetail";
import Daily from "./components/Daily";
import ScrollToTop from "./components/Nav/ScrollToTop";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import AddCDM from "./components/Admin/AddCDM";
import LogOut from "./components/LogOut";
import { isLogin } from "./utils";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="max-w-full container">
        <Navbar loggedIn={isLogin()}/>
        <div className="h-24"></div>
        <div className="min-h-screen">
          <Switch>
            <PublicRoute restricted={true} path="/login" component={Login} />
            <PrivateRoute path="/logout" component={LogOut} />
            <PrivateRoute path="/admin/addnewcdm" component={AddCDM}  />
            <Route path="/publicshame" component={PublicShame} />
            <PublicRoute restricted={false} path="/cdm" component={CDM} />
            <Route path="/cdmdetail/:id" component={CDMDetail} />
            <Route path="/juntabusinesses" component={JuntaList} />
            <Route path="/daily/:date" component={Daily} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <Footer />
        <div className="h-16 md:hidden"></div>
        <MobileNav />
      </div>
    </Router>
  );
}

export default App;
