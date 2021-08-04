import React from 'react';
import './style.css'

class ItemListContainer extends React.Component {
    render () {
        const saludoInicial = 'Las Novedades del Mes'

    return (
            <div>
                <h2>{saludoInicial}</h2>
            </div>
        );
    }
}

export default ItemListContainer;