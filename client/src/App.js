import React from "react";
import Home from "./Screens/Home";
import UserDetail from "./Screens/UserDetail";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user/:login" exact component={UserDetail} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
