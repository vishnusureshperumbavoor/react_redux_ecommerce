import "./App.css";
import PrintSize from "./components/PrintSize";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrintType from "./components/PrintType";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar className="navbar"c/>
        <Routes>
          <Route path="/" element={<PrintSize />} />
          <Route path="/:id" element={<PrintType />} />
        </Routes>
        <Footer className="footer"/>
      </Router>
    </div>
  );
}

export default App;
