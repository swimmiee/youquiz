import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Auth from "../routes/Auth";
import CreateAccount from "../routes/CreateAccount";
import Home from "../routes/Home";
import Draw from "../routes/Draw";

const AppRouter = ({ isLoggedIn, user, hasAccount, doc_user_id, currentInfo }) => {
    return (
        <Router>
            <Switch>
            {isLoggedIn? (
                hasAccount ?
                <>
                    <Route exact path="/">
                        <Home user={user} doc_user_id={doc_user_id} currentInfo={currentInfo}/>
                    </Route>
                    {
                        user.isAdmin && 
                            <Route exact path="/draw">
                                <Draw/>
                            </Route>
                    }
                    {/* <Redirect from="*" to="/"/> */}
                </>
                :
                <>
                    <Route exact path="/">
                        <CreateAccount user={user}/>
                    </Route>
                </>
            ) 
            : (
            <>
                <Route exact path="/">
                    <Auth />
                </Route>
            </>
            )}
            </Switch>
        </Router>
    );
};
export default AppRouter;