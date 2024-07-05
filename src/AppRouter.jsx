import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSettingsContext } from "./hooks/useSettingsContext";

function AppRouter() {

  const { globalSettings } = useSettingsContext();

  return (
    <BrowserRouter>
      <GlobalStyles $settings={globalSettings} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route />
        <Route />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter;
