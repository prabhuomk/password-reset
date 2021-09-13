import AppBar from "@material-ui/core/AppBar";

import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export function Header({ isToken, setIsToken }) {
  const history = useHistory();
  console.log(isToken);
  const Logout = () => {
    localStorage.setItem("token", "");
    setIsToken("");
    history.push("/");

  };
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h3>PASSWORD-RESET</h3>
          </div>
          <div>
            <Button onClick={() => history.push("/")} color="inherit">
              HOME
            </Button>
            {isToken === "" ? (
              <>
                <Button onClick={() => history.push("/signup")} color="inherit">
                  signup
                </Button>
                <Button onClick={() => history.push("/login")} color="inherit">
                  Login
                </Button>{" "}
              </>
            ) : (
              <Button onClick={Logout} color="inherit">
                Logout
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
