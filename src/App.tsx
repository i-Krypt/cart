import { Routes, Route } from "react-router-dom";
import { About } from "./pages/about";
import { Home } from "./pages/home";
import { Store } from "./pages/store";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
