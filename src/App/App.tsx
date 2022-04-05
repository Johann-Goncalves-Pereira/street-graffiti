//& Utility
import { BrowserRouter, Routes, Route } from "react-router-dom";

//& Page Elements
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";

//& Style
import styles from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
