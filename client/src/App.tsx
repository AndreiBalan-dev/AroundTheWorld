import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navigation";
import Layout from "./components/Layout";
import NotFound from "./components/404";
import ApplicationLogin from "./pages/ApplicationLogin";
import Application from "./pages/Application";
import ApplicationRegister from "./pages/ApplicationRegister";
import Zones from "./pages/Zones";
import Github from "./pages/Github";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Info from "./pages/Info";

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
            path="/zone"
            element={
              <>
                <Zones />
              </>
            }
          ></Route>
          <Route
            path="/github"
            element={
              <>
                <Github />
              </>
            }
          ></Route>
          <Route
            path="/noutati"
            element={
              <>
                <News />
              </>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <>
                <Contact />
              </>
            }
          ></Route>
          <Route
            path="/informatii"
            element={
              <>
                <Info />
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
