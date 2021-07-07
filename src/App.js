import { Route } from "react-router-dom";
import About from "./routes/about/About";
import Home from "./routes/home/Home";
import Work from "./routes/work/Work";
import Contact from "./routes/contact/Contact";
// import { Transition, TransitionGroup } from "react-transition-group";
import { AnimatedSwitch } from "react-router-transition";
import { bounceTransition, mapStyles } from "./routes/animatedRoutes";
import PropTypes from "prop-types";
import React from "react";
import routes from "./routes/routes";
// "homepage": "https://Hibanaga.github.io/VladyslavTykhoniukCV",

function App({ assets }) {
  return (
    <>
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="route-wrapper"
      >
        <Route path={routes.home} exact component={Home} />
        <Route path={routes.about} exact component={About} />
        <Route
          path={routes.work}
          exact
          component={() => <Work assetsWorks={assets} />}
        />

        <Route path={routes.contact} exact component={Contact} />
      </AnimatedSwitch>
    </>
  );
}

App.propTypes = {
  assets: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

export default App;
