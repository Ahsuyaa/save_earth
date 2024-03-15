import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./component/Footer/Footer";
import NavBar from "./component/Navbar/NavBar";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
