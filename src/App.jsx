import { Routes, Route } from "react-router-dom";
import "../src/styles/global.css";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import Footer from "./components/Footer";
import { Acessibilidade } from "./pages/acessibilidade";
import AcessibilidadeBar from "./components/AcessibilidadeBar";
import ThemeProvider from "./hooks/useTheme";
import RegisterProduct from "./pages/cadastrarProduto";
import ConsultProduct from "./pages/consultarProduto";

function App() {
  return (
    <>
      <ThemeProvider>
        <AcessibilidadeBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/acessibilidade" element={<Acessibilidade />} />
          <Route path="/register" element={<RegisterProduct />} />
          <Route path="/consult-product" element={<ConsultProduct />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
