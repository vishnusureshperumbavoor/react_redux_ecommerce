import "./App.css";
import PrintSize from "./components/PrintSize";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrintType from "./components/PrintType";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import ImageUpload from "./components/ImageUpload";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PrintSize />} />
          <Route path="/printtype/:id" element={<PrintType />} />
          <Route path="/imageupload/:id" element={<ImageUpload />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
