import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

const App = () => {
    return(
    <div>
        <NavBar />
        <ItemListContainer />
        <div>
            <h3>Ofertas Exclusivas</h3>
            <p>Lorem Ipsum</p>
        </div>
    </div>)
}

export default App;