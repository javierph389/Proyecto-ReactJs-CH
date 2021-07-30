import React from 'react';
import './style.css'

export default function NavBar () {
    return <>
        <div className="barranav">
        <h1 className="titulo">Emalara <br />La Tienda de Mascotas</h1>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Todo para Perros</a></li>
                <li><a href="#">Todo para Gatos</a></li>
                <li><a href="#">Todo para Roedores</a></li>
                <li><a href="#">Preguntas Frecuentes</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
    </>;
}