import React, {createContext, useState} from 'react';
import {BrowserRouter as Router, Switch} from "react-router-dom"
import {Home, Browse, SignIn, SignUp} from "./pages";
import * as ROUTES from "./constants/routes"
import {IsUserRedirect, ProtectedRoute} from "./hooks/routes"
import {useAuthListener} from "./hooks";

export const PlayerContext = createContext();
export default function App() {
    const {user} = useAuthListener()
    const [showPlayer, setShowPlayer] = useState(false);
    return (
        <PlayerContext.Provider value={{showPlayer, setShowPlayer}}>
            <Router>
                <Switch>
                    <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                        <SignIn/>
                    </IsUserRedirect>
                    <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                        <SignUp/>
                    </IsUserRedirect>
                    <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                        <Browse/>
                    </ProtectedRoute>
                    <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
                        <Home/>
                    </IsUserRedirect>
                </Switch>
            </Router>
        </PlayerContext.Provider>
    );
}
