import './App.css';
import Home from "./routes/Home";
import Work from "./routes/Work";
import Photography from "./routes/Photography";
import Contact from "./routes/Contact";
import ScrollToTop from './components/NavBar/scrolltop';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/photography" element={<Photography/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
