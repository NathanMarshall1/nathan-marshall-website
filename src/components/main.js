import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import AboutMe from "./aboutme";
import Contact from "./contact";
import Projects from "./projects";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/experience" component={Experience} />
    <Route path="/education" component={Education} />
    <Route path="/skills" component={Skills} />
  </Switch>
);

export default Main;
