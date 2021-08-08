import React from 'react';
import './style.css'


class ItemCount extends React.Component {

    constructor(props) {
        super(props)
        this.state = { conteo: 1}
    }

    fxSuma() {
        this.setState(estadoAnterior => ({
            conteo: estadoAnterior.conteo + 1
        }));
    }

    fxResta() {
        this.setState({
            conteo: this.state.conteo -1
        })
    }

    render() {
        return (
            <div className='estiloItem'>
                <div className="conteoItem">
                    <button onClick={this.fxResta.bind(this)}>-</button>
                    <p className='margenconteo'>{this.state.conteo}</p>
                    <button onClick={this.fxSuma.bind(this)}>+</button>
                </div>
                <div className='btnAgregar'>    
                    <button>Agregar al Carrito</button>
                </div>
            </div>
        )
    }
}

export default ItemCount;
