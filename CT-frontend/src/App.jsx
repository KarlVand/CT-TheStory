import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation.jsx";
import HomePage from "./pages/HomePage.jsx";
import Gallery from "./pages/Gallery.jsx";
import UserForm from "./components/users/UserForm.jsx";
import UserList from "./components/users/UserList.jsx";

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
        <Route
          path="/users"
          element={<UserList />}
        />
        <Route
          path="/register"
          element={<UserForm />}
        />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
