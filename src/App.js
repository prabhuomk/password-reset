import "./styles.css";
import { Header } from "./header";

import { Switch, Route } from "react-router-dom";
import { FirstPage } from "./FirstPage";
import { SignUp } from "./signup";
import { Login } from "./login";

import { ForgetPassword } from "./forgetpassword";

import { ResetPassword } from "./resetpassword";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <FirstPage />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/welcome">
          <FirstPage />
        </Route>
        <Route exact path="/forgetpassword">
          <ForgetPassword />
        </Route>
        <Route exact path="/password-reset/:id/:token">
          <ResetPassword />
        </Route>
      </Switch>
    </div>
  );
}
