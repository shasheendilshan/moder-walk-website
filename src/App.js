import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarSimple } from "./components";
import { Home, CategoryPage } from "./pages";

import { StateContext } from "./context/StateContext";

function App() {
  return (
    <StateContext>
      <BrowserRouter>
        {/* <Navbar /> */}
        <NavbarSimple />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/mens-clothing"
            element={
              <CategoryPage
                category={"men's clothing"}
                title={"Men's Clothing"}
              />
            }
          />
          <Route
            path="/womens-clothing"
            element={
              <CategoryPage
                category={"women's clothing"}
                title={"Women's Clothing"}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </StateContext>
  );
}

export default App;
