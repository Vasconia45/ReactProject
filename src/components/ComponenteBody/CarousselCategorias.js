import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import Imagen1 from './../../assets/img/categorias/pescaderia.jpg'
import Imagen2 from './../../assets/img/categorias/perfumeria.jpg'
import Imagen3 from './../../assets/img/categorias/carniceria.jpg'

export const CarousselCategorias = () => {
  return (
    <Carousel id="categorias" className="mt-5">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Perfumeria</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Pescaderia</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Carniceria</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarousselCategorias