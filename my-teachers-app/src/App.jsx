import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home/Home";
import Teachers from "./pages/Teachers/Teachers";
import Favorites from "./pages/Favorites/Favorites";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/teachers" element={<Teachers />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<RegistrationForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
