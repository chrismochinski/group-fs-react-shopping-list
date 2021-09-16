import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {


// POST the creature to our server
axios({
    method: 'POST',
    url: '/list',
    data: newItem
}).then(response => {
    console.log('POST /list', response);

  fetchShoppingList(); 
}).catch(error => {
    console.log('POST /list failed', error);
})
}

















    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
