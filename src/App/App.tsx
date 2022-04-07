//& Utility
import { BrowserRouter, Routes, Route } from "react-router-dom";

//& Page Elements
import Header from "./Components/Header/Header";

//& Pages
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
