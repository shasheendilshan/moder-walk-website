import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Men, Women } from "./pages";

import { StateContext } from "./context/StateContext";

function App() {
  return (
    <StateContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens-clothing" element={<Men />} />
          <Route path="/womens-clothing" element={<Women />} />
        </Routes>
      </BrowserRouter>
    </StateContext>
  );
}

export default App;
