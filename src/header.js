import AppBar from "@material-ui/core/AppBar";

import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export function Header() {
  const history = useHistory();
  const isToken = localStorage.getItem("token");
  console.log(isToken);
  const Logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h3>GUVI_ZEN</h3>
          </div>
          <div>
            <Button onClick={() => history.push("/")} color="inherit">
              HOME
            </Button>
            {isToken === null ? (
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
