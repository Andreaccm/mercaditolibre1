import React from "react";
import "../Styles/Home.css";
import Product from "../Screen/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://depor.com/resizer/2N1d07y9zqK4j4rhPVR7ph1Y8ag=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/W4MX6GLJPFEBVJCNQWUH6CHNHY.jpg"
          alt=" "
        />

        <div className="home__row">
          <Product
            title="Nike Zapatillas de deporte de caña baja unisex para adultos"
            price={340.63}
            image="https://images-na.ssl-images-amazon.com/images/I/71Fqy9hq9QL._AC_UY395_.jpg"
          />
          <Product
            title="Mochila adidas Stadium II, Jersey Onix, TALLA ÚNICA"
            price={60.75}
            image="https://images-na.ssl-images-amazon.com/images/I/91k5D2UE75L._AC_SY450_.jpg"
          />
          <Product
            title="Adidas Originals Trefoil Sudadera con capucha para hombre"
            price={133}
            image="https://images-na.ssl-images-amazon.com/images/I/71w9OWOgbjL._AC_UY500_.jpg"
          />

        </div>

        <div className="home__row">
          <Product
            id="15684972"
            title="Playstation 4 Slim 1 TB"
            price={800}
            image="https://http2.mlstatic.com/D_Q_NP_917181-MLV44970512457_022021-AB.webp"
          />
          <Product
            id="65948732"
            title="Mouse Gamer Logitech G502 Hero"
            price={60}
            image="https://http2.mlstatic.com/D_NQ_NP_648203-MLV44887413598_022021-O.webp"
          />
          <Product
            id="56942371"
            title="PS5 825 Gb de memoria nuevas disponible en  version ( versión digita) con sus respectivos accesorios en caja."
            price={1500}
            image="https://http2.mlstatic.com/D_NQ_NP_672792-MLV45093823093_032021-O.webp"
          />
          <Product
            id="49723816"
            title="Poster SAO"
            price={630.45}
            image="https://depor.com/resizer/2N1d07y9zqK4j4rhPVR7ph1Y8ag=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/W4MX6GLJPFEBVJCNQWUH6CHNHY.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="32875144"
            title="Nintendo Switch "
            price={100.10}
            image="https://http2.mlstatic.com/D_NQ_NP_937207-MLV44906086044_022021-O.webp"
          />

          <Product
            id="116849975"
            title="Samsung Galaxy A31 A315G 128GB Dual SIM GSM desbloqueado teléfono inteligente Android (variante internacional / LTE compatible con EE. UU.)"
            price={110.10}
            image="https://images-na.ssl-images-amazon.com/images/I/61A3UNuWO9L._AC_SX679_.jpg"
          />
          <Product
            id="55972324"
            title="Ferrari Supercar, cómodo juego para niños y adultos, funda para silla de salón interior al aire libre + bolsa interior (sin frijoles) rojo"
            price={320.10}
            image="https://images-na.ssl-images-amazon.com/images/I/71GG9tZQk9L._AC_SX450_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
