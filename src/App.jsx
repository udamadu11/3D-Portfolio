import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home, Projects } from "./pages";
import Navbar from "./components/Navbar";

import "./index.css";

function App() {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/projects" element={<Projects />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
