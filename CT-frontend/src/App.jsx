import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation.jsx";
import HomePage from "./components/HomePage.jsx";
import Gallery from "./components/Gallery.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={<HomePage />}
        />
        <Route
          path="/gallery"
          element={<Gallery />}
        />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
