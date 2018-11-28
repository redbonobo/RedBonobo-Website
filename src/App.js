import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/common/navbar";
import HomePage from "./components/homePage";
import ContactPage from "./components/contactPage";
import ProjectDetailsPage from "./components/projectDetailsPage";
import NotFoundPage from "./components/notFoundPage";
import ServicesPage from "./components/servicesPage";
import ProjectsPage from "./components/projectsPage";
import Footer from "./components/common/footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/contact" component={ContactPage} />
          <Route path="/projects/:id" component={ProjectDetailsPage} />} />
          <Route path="/projects" component={ProjectsPage} />} />
          <Route path="/services" component={ServicesPage} />} />
          <Route path="/not-found" component={NotFoundPage} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
