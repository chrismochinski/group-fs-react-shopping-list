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

    //DELETE LATER - POST
    const addItem = (event) => {
        console.log('THIS IS TEMPORARY POST')
    }
    //delete later

    //DELETE LATER - GET
    const fetchShoppingList = (event) => {
        console.log('THIS IS TEMPORARY GET')
    }
    //delete later


    return (
        <div className="App">
            <Header />
            <main>
                <div>
                <p>Under Construction...</p>
                <form onSubmit={addItem}>
                <h2>Add An Item:
                <label>
                Item Name:
                </label><br />
                <input
                type ="text"
                placeholder="EG: Apples"
                onChange={(evt) => set }
                /><br /><br />
                <label>
                Quantity:
                </label><br />
                <input
                type ="number"
                placeholder="EG: 5"
                onChange={(evt) => set }
                /><br /><br />
                <label>
                Unit:
                </label><br />
                <input
                type ="text"
                placeholder="Unit (EG: Lbs)"
                onChange={(evt) => set }
                />
                </form>
                </div>




            </main>
        </div>
    );
}

export default App;
