import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import Imagen1 from './../../assets/img/categorias/pescaderia.jpg'

export const CarousselCategorias = () => {
  return (
    <Carousel id="categorias" className="mt-5">
      <Carousel.Item>
        <img
          className=""
          src={Imagen1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarousselCategorias