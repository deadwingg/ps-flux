import React from "react";
import Homepage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import Header from "./common/header";
import PageNotFound from "./PageNotFound";
import ManageCoursePage from "./ManageCoursePage";
import {Route, Switch, Redirect} from "react-router-dom";

function App() {

    return(
        <div className="container-fluid">
            <Header/>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route path="/courses" component={CoursesPage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/course/:slug" component={ManageCoursePage}/>
                <Route path="/course" component={ManageCoursePage}/>
                <Redirect from="/about-page" to="/about"/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    );
}

export default App;