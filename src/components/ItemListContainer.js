import React from 'react';
import ItemCount from './ItemCount';
import './style.css'

class ItemListContainer extends React.Component {
    render () {
        const saludoInicial = 'Las Novedades del Mes'

    return (
            <div>
                <h2>{saludoInicial}</h2>
                <ItemCount />
            </div>
        );
    }
}

export default ItemListContainer;