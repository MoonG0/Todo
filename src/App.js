import "./App.css";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import TodoPage from "./views/TodoPage";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.authenticated);
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <LoginPage/> */}
          {/* <RegisterPage /> */}
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route
              path="/todo"
              render={({ location }) =>
                isAuthenticated ? (
                  <TodoPage />
                ) : (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { from: location },
                    }}
                  />
                )
              }
            />
            <Route
              path="/"
              render={({ location }) =>
                isAuthenticated ? (
                  <TodoPage />
                ) : (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { from: location },
                    }}
                  />
                )
              }
            />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
