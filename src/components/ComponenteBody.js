import React from 'react'

import CarousselCategorias from './ComponenteBody/CarousselCategorias';
import Productos from './ComponenteBody/Productos';
import Info from './ComponenteBody/Info';
import CarousselMarcas from './ComponenteBody/CarousselMarcas';

export const ComponenteBody = () => {
    return (
        <div>
            <CarousselCategorias></CarousselCategorias>
            <Productos></Productos>
            <Info></Info>
            <CarousselMarcas></CarousselMarcas>
        </div>
    );
}

export default ComponenteBody