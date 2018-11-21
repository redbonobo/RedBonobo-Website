import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Contact from "./components/contact";
import ProjectDetails from "./components/projectDetails";
import NotFound from "./components/notFound";
import Story from "./components/story";
import Projects from "./components/projects";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/projects/:id" component={ProjectDetails} />} />
          <Route path="/projects" component={Projects} />} />
          <Route path="/story" component={Story} />} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" component={Home} />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
