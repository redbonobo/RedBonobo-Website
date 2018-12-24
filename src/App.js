import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/common/navbar";
import LandingPage from "./components/landingPage";
import ContactPage from "./components/contactPage";
// import ProjectDetailsPage from "./components/projectDetailsPage";
import NotFoundPage from "./components/notFoundPage";
// import StoryPage from "./components/storyPage";
import ProjectsPage from "./components/projectsPage";
import Footer from "./components/common/footer";
// import NavBarTest from "./components/common/navbar_test";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        {/* <NavBarTest /> */}
        <div id="main">
          <Switch>
            <Route path="/contact" component={ContactPage} />
            {/* <Route path="/projects/:id" component={ProjectDetailsPage} />} /> */}
            <Route path="/projects" component={ProjectsPage} />} />
            {/* <Route path="/story" component={StoryPage} />} /> */}
            <Route path="/not-found" component={NotFoundPage} />
            <Route path="/" exact component={LandingPage} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
