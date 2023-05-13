import { useEffect, useState } from "react";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import LogoCompany from "./Components/LogoCompany";
import './assets/scss/style.scss'


function App() {

    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Header/>
      <Carousel/>
      <Intro/>
      <LogoCompany/>
      <Footer/>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top text-white">
          <i className="fa fa-angle-left"></i> PAGE TOP
        </button>
      )}
    </>
  );
}

export default App;
