import { Route } from "react-router-dom";
import About from "./routes/about/About";
import Home from "./routes/home/Home";
// import { Transition, TransitionGroup } from "react-transition-group";
import { AnimatedSwitch } from "react-router-transition";
import { bounceTransition, mapStyles } from "./routes/animatedRoutes";

import React from "react";

export default function App() {
  return (
    <>
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="route-wrapper"
      >
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/" component={About} />
      </AnimatedSwitch>
    </>
  );
}
