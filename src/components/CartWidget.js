import React from 'react';
import addcarrito from './img/addcarrito.png'
import './style.css'

const CartWidget = () => {
    return (
        <div>
            <div className='distCarro'>
                <img alt='Icono del carrito' src={addcarrito} />
                <p>0 ítems añadidos</p>
            </div>
            <div className='btnCarro'>
                <button>Ver carrito</button>
            </div>
        </div>
    )
}

export default CartWidget;