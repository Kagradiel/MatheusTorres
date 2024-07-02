import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";

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
    </BrowserRouter>
  )
}

export default AppRouter;
