import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"
import { Home, Browse, SignIn, SignUp} from "./pages";
import * as ROUTES from "./constants/routes"
import { IsUserRedirect } from "./hooks/routes"

export default function App() {
    const user = {}
    return (
        <Router>
            <Route exact path={ROUTES.HOME} component={Home}/>
            <Route exact path={ROUTES.BROWSE} component={Browse}/>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                <SignIn />
            </IsUserRedirect>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                <SignUp />
            </IsUserRedirect>
        </Router>
    )
}
