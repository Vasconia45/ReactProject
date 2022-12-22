import React from 'react'

import Imagen1 from './../../assets/img/marcas/cocacola.png'
import Imagen2 from './../../assets/img/marcas/fiji.jpg'
import Imagen3 from './../../assets/img/marcas/lays.png'
import Imagen4 from './../../assets/img/marcas/walkers.jpg'
import Imagen5 from './../../assets/img/marcas/5J.png'
import Imagen6 from './../../assets/img/marcas/enate.png'
import Imagen7 from './../../assets/img/marcas/moet.jpg'

export const CarousselMarcas = () => {
    return (
        <div className="mt-3" id="marcas">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="cards-wrapper d-flex justify-content-around">
                            <div className="cards">
                                <div className="face front">
                                    <img src={Imagen1} className="w-100 h-100" valt="" />
                                </div>
                                <div className="face back">
                                    <h3 className="mt-3 texto">CocaCola</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique possimus dolorem
                                        soluta
                                        id sit
                                        aliquid, unde fugiat, debitis porro earum minima quaerat voluptas, totam ad tempore
                                        illum
                                        nulla nesciunt
                                        voluptate.</p>
                                </div>
                            </div>
                            <div className="cards">
                                <div className="face front">
                                    <img src={Imagen2} className="w-100 h-100" valt="" />
                                </div>
                                <div className="face back">
                                    <h3 className="mt-3 texto">Fiji</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique possimus dolorem
                                        soluta
                                        id sit
                                        aliquid, unde fugiat, debitis porro earum minima quaerat voluptas, totam ad tempore
                                        illum
                                        nulla nesciunt
                                        voluptate.</p>
                                </div>
                            </div>
                            <div className="cards">
                                <div className="face front">
                                    <img src={Imagen3} className="w-100 h-100" valt="" />
                                </div>
                                <div className="face back">
                                    <h3 className="mt-3 texto">Lays</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique possimus dolorem
                                        soluta
                                        id sit
                                        aliquid, unde fugiat, debitis porro earum minima quaerat voluptas, totam ad tempore
                                        illum
                                        nulla nesciunt
                                        voluptate.</p>
                                </div>
                            </div>
                            <div className="cards">
                                <div className="face front">
                                    <img src={Imagen4} className="w-100 h-100" valt="" />
                                </div>
                                <div className="face back">
                                    <h3 className="mt-3 texto">Walkers</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique possimus dolorem
                                        soluta
                                        id sit
                                        aliquid, unde fugiat, debitis porro earum minima quaerat voluptas, totam ad tempore
                                        illum
                                        nulla nesciunt
                                        voluptate.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="cards-wrapper d-flex justify-content-around">
                            <div className="cards">
                                <div className="face front">
                                    <img src={Imagen5} className="w-100 h-100" valt="" />
                                </div>
                                <div className="face back">
                                    <h3 className="mt-3 texto">CocaCola</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique possimus dolorem
                                        soluta
                                        id sit
                                        aliquid, unde fugiat, debitis porro earum minima quaerat voluptas, totam ad tempore
                                        illum
                                        nulla nesciunt
                                        voluptate.</p>
                                </div>
                            </div>
                            <div className="cards">
                                <div className="face front">
                                    <img src={Imagen6} className="w-100 h-100" valt="" />
                                </div>
                                <div className="face back">
                                    <h3 className="mt-3 texto">CocaCola</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique possimus dolorem
                                        soluta
                                        id sit
                                        aliquid, unde fugiat, debitis porro earum minima quaerat voluptas, totam ad tempore
                                        illum
                                        nulla nesciunt
                                        voluptate.</p>
                                </div>
                            </div>
                            <div className="cards">
                                <div className="face front">
                                    <img src={Imagen7} className="w-100 h-100" valt="" />
                                </div>
                                <div className="face back">
                                    <h3 className="mt-3 texto">5J</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique possimus dolorem
                                        soluta
                                        id sit
                                        aliquid, unde fugiat, debitis porro earum minima quaerat voluptas, totam ad tempore
                                        illum
                                        nulla nesciunt
                                        voluptate.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CarousselMarcas