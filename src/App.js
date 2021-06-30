
import "./App.css";
import Login from "./Login";
import MainView from "./MainView";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateNew from "./createNewPost";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/create">
              <CreateNew />
            </Route>
            <Route path="/home">
              <MainView />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
