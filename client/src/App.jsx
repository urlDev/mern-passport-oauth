import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { myContext } from "./components/Context";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import Nav from "./components/nav/Nav";

function App() {
  const userObject = React.useContext(myContext);
  console.log(userObject);
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
