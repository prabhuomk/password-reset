import "./styles.css";
import { Header } from "./header";
import { Switch, Route } from "react-router-dom";
import { FirstPage } from "./FirstPage";
import { SecondPage } from "./secondpage";
import { SignUp } from "./signup";
import { Login } from "./login";
import { ForgetPassword } from "./forgetpassword";
import { ResetPassword } from "./resetpassword";
import { useState } from "react";

export default function App() {
  const tkn = !localStorage.getItem("token") && "";
  const [isToken, setIsToken] = useState(tkn);
  return (
    <div className="App">
      <Header  isToken={isToken} setIsToken={setIsToken}  />
      <Switch>
        <Route exact path="/">
          <FirstPage />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login setIsToken={setIsToken}/>
        </Route>
        <Route exact path="/welcome">
          <SecondPage />
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
