import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import InvitePage from "./pages/InvitePage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile/:cat">
            <Profile />
          </Route>

          <Route path="/invite">
            <InvitePage></InvitePage>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
