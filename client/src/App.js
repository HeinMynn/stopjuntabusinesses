import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import "react-awesome-lightbox/build/style.css";
import "react-image-lightbox/style.css";
import Home from "./components/Home";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Parts/Footer";
import CDM from "./components/CDM";
import JuntaList from "./components/JuntaList";
import PublicShame from "./components/PublicShame";
import MobileNav from "./components/Nav/MobileNav";
import ShamingDetail from "./components/ShamingDetail";
import Daily from "./components/Daily";
import ScrollToTop from "./components/Nav/ScrollToTop";
import Login from "./components/Auth/Login";
import PrivateRoute from "./components/Parts/PrivateRoute";
import PublicRoute from "./components/Parts/PublicRoute";
import AddCDM from "./components/Admin/AddCDM";
import AddNewsletter from "./components/Admin/AddNewsletter";
import LogOut from "./components/Auth/LogOut";
import { isLogin } from "./utils";
import { PageView, initGA } from "./components/Tracking";
import { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { ChangeLang } from "./components/Parts/ChangeLang";
import Newsletter from "./components/Newsletter";
import CampaignDetail from "./components/CampaignDetail";
import CampaignList from "./components/CampaignList";
import NotFound from "./components/404";
import AddShame from "./components/Admin/AddShame";

function App() {
  const localLang = localStorage.getItem("lang");
  const locale = useState(localLang === null ? "EN" : localLang);
  
  useEffect(() => {
    initGA("UA-43406006-6");
    PageView();
  }, [locale]);
  return (
    <Router>
      <ScrollToTop />
      <HelmetProvider>
        <div className="max-w-full container dark:bg-black dark:text-white">
          <ChangeLang.Provider value={locale}>
            <Navbar loggedIn={isLogin()} />
            <div className="h-24 dark:bg-black"></div>
            <div className="min-h-screen dark:bg-black">
              <Switch>
                <PublicRoute
                  restricted={true}
                  path="/login"
                  component={Login}
                />
                <PrivateRoute path="/logout" component={LogOut} />
                <PrivateRoute path="/admin/addnewcdm" component={AddCDM} />
                <PrivateRoute path="/admin/addshame" component={AddShame} />
                <PrivateRoute
                  path="/admin/addnewsletter"
                  component={AddNewsletter}
                />
                <Route path="/publicshame" component={PublicShame} />
                <PublicRoute restricted={false} path="/cdm" component={CDM} />
                <Route path="/shaming/:id" component={ShamingDetail} />
                <Route path="/juntabusinesses" component={JuntaList} />
                <Route path="/daily/:date" component={Daily} />
                <Route path="/newsletter" component={Newsletter} />
                <Route path="/campaigns/:status" component={CampaignList} />
                <Route path="/campaign/:id" component={CampaignDetail} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
              </Switch>
            </div>
            <Footer />
            <div className="h-16 md:hidden"></div>
            <MobileNav />
          </ChangeLang.Provider>
        </div>
      </HelmetProvider>
    </Router>
  );
}

export default App;
