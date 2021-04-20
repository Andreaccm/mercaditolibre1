import logo from "./logo.svg";
import "./Styles/App.css";
import Header from "./Screen/Header";
import Home from "./Screen/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Screen/Login";
import Register from "./Screen/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
