import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import Details from "./pages/Details/Details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Menu />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
