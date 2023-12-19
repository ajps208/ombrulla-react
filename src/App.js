import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import About from "./Pages/About/About";
import BlogPage from "./Pages/BlogPage/BlogPage";
import Contacts from "./Pages/Contacts/Contacts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
