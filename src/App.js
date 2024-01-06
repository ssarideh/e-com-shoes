import { useState } from "react";
import Header from "./components/Header";
import Lightbox from "./components/Lightbox";
import Main from "./components/Main";
import { data } from "./data";
import { CartProvider } from "./CartContext";

function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };
  return (
    <CartProvider>
      <Header />
      {showLightbox && (
        <Lightbox
          products={data}
          slideIndex={slideIndex}
          setSlideIndex={setSlideIndex}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          setShowLightbox={setShowLightbox}
        />
      )}

      <Main
        products={data}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        setShowLightbox={setShowLightbox}
      />
    </CartProvider>
  );
}

export default App;
