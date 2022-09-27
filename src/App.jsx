import { Routes, Route } from "react-router-dom";
import "../src/styles/global.css";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Login } from './pages/Login';
import  Footer  from './components/Footer'
import { Acessibilidade } from "./pages/acessibilidade";
import  AcessibilidadeBar  from './components/AcessibilidadeBar'


function App() {
  return (
    <>
      <AcessibilidadeBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/acessibilidade" element={<Acessibilidade />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
