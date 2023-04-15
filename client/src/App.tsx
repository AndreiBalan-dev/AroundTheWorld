import "./App.css";
import Navbar from "./components/Navigation";
import Layout from "./components/Layout";
import NotFound from "./components/404";
import ApplicationLogin from "./pages/ApplicationLogin";
import Application from "./pages/Application";
import ApplicationRegister from "./pages/ApplicationRegister";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Layout />
              </>
            }
          ></Route>
          <Route
            path="/aplicatie/login"
            element={
              <>
                <ApplicationLogin />
              </>
            }
          ></Route>
          <Route
            path="/aplicatie/register"
            element={
              <>
                <ApplicationRegister />
              </>
            }
          ></Route>
          <Route
            path="/aplicatie"
            element={
              <>
                <Application />
              </>
            }
          ></Route>
          <Route
            path="*"
            element={
              <>
                <NotFound />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
