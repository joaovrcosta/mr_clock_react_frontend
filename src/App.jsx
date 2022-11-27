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
import ConsultRequest from "./pages/consultarPedido";
import ConsultUser from "./pages/consultarCliente";
import ConvenioPage from "./pages/convenio";
import Cart from "./pages/Cart";
import { SignUp } from "./pages/SignUp";
import { AuthContextProvider } from "./hooks/useAuth";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ThemeProvider>
          <AcessibilidadeBar />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/acessibilidade" element={<Acessibilidade />} />
            <Route path="/add-product" element={<RegisterProduct />} />
            <Route path="/consult-product" element={<ConsultProduct />} />
            <Route path="/consult-request" element={<ConsultRequest />} />
            <Route path="/consult-user" element={<ConsultUser />} />
            <Route path="/medical-insurance" element={<ConvenioPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
