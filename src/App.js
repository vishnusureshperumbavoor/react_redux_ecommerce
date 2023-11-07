import "./App.css";
import PrintSize from "./components/PrintSize";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrintType from "./components/PrintType";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PrintSize/>}/>
          <Route path="/:id" element={<PrintType/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
