import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";

function AppRouter() {

  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route/>
        <Route/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter;
