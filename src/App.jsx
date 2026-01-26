import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import Details from "./pages/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
