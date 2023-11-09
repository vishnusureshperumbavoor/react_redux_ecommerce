import "./App.css";
import PrintSize from "./components/PrintSize";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrintType from "./components/PrintType";
import ImageUpload from "./components/ImageUpload";
import { Provider } from "react-redux";
import store from "./reducers/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<PrintSize />} />
            <Route path="/printtype" element={<PrintType />} />
            <Route path="/imageupload" element={<ImageUpload />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
