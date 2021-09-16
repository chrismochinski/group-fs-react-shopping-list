import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    let [shoppingList, setShoppingList] = useState([]);
    let [itemName, setItemName] = useState('');
    let [itemQuantity, setItemQuantity] = useState('');
    let [itemUnit, setItemUnit] = useState('');

    useEffect(() => {
        fetchShoppingList()
    }, [])


    // POST the creature to our server
    const addItem = () => {
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













    // Uses DELETE to remove all items from the list
    const clearItems = () => {
        axios({
            method: 'DELETE',
            url: '/list/clear'
        }).then(response => {
            console.log('DELETE /list/clear', response);
            fetchShoppingList();
        }).catch(error => {
            console.log('DELETE /list/clear has failed:', error);
        });
    }

    return (
        <div className="App">
            <Header />
            <main>
                
                {/* COMPLETE: ITEM/QTY/UNIT FORM BELOW */}
                <div>
                <p><i>Under Construction...</i></p>
                <form onSubmit={addItem}>
                <h2>Add An Item:</h2>
                <label>
                Item Name:
                </label><br />
                <input
                type ="text"
                placeholder="EG: Apples"
                onChange={(evt) => setItemName(evt.target.value)}
                /><br /><br />
                <label>
                Quantity:
                </label><br />
                <input
                type ="number"
                placeholder="EG: 5"
                onChange={(evt) => setItemQuantity(evt.target.value)}
                /><br /><br />
                <label>
                Unit:
                </label><br />
                <input
                type ="text"
                placeholder="Unit (EG: Lbs)"
                onChange={(evt) => setItemUnit(evt.target.value)}
                />
                </form>
                </div>


            </main>
        </div>
    );
}

export default App;
