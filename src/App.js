import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import InvalidURL from "./Components/InvalidURL";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import Signin from "./Components/Signin";
import Program1 from "./Components/Program1";
import TalentBasedScholarships from "./Components/TalentBasedScholarships";
import MeritBasedScholarships from "./Components/MeritBasedScholarships";
import STEP from "./Components/STEP";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import ApplyForSchloarship from "./Components/ApplyForScholarship";
//import Signup from "./Components/Signup";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/AboutUs" exact component={AboutUs} />
        <Route path="/Home" exaxt component={Home} />
        <Route
          path="/TalentBasedScholarships"
          exact
          component={TalentBasedScholarships}
        />
        <Route
          path="/ApplyForScholarship"
          exact
          component={ApplyForSchloarship}
        />
        <Route
          path="/MeritBasedScholarships"
          exact
          component={MeritBasedScholarships}
        />
        <Route path="/STEP" exact component={STEP} />
        <Route path="/ContactUs" exaxt component={ContactUs} />
        <Route path="/AboutUs" exaxt component={AboutUs} />
        <Route path="/Program1" exaxt component={Program1} />
        {/*<Route path="/Signup" exact component={Signup} />*/}

        <Route path="/Signin" exact component={Signin} />
        <Route path="/InvalidURL" exact component={InvalidURL} />
        <Redirect to="/InvalidURL"></Redirect>
      </Switch>
      <Footer />
      <footer class="page-footer font-small">
        <div class="footer-copyright text-center py-3">
          © 2019 Copyrights Resevered :
          <a id="col" href="https://app.com/">
            app.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
