import Navbar from "./components/Navigation";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Layout></Layout>
      </div>
    </div>
  );
}

export default App;
