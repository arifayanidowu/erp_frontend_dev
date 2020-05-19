import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginComponent } from "./components/LoginComponent";
import { ForgotPassword } from "./components/ForgotPassword";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginComponent} />
          <Route path="/forgotpass" component={ForgotPassword} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
