import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../../../../../react-redux-react-router-es6/05/demos/after/src/components/home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "../../../../../../react-redux-react-router-es6/05/demos/after/src/components/common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "../../../../../../react-redux-react-router-es6/05/demos/after/src/components/courses/CoursesPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
