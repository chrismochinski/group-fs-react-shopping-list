import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import Item from '../Item/Item.jsx';

function App() {

    let [shoppingList, setShoppingList] = useState([]);
    let [itemName, setItemName] = useState('');
    let [itemQuantity, setItemQuantity] = useState('');
    let [itemUnit, setItemUnit] = useState('')

    const newItem = {
        item: itemName,
        quantity: itemQuantity,
        unit: itemUnit
    }

    useEffect(() => {
        fetchShoppingList();
    }, []);

    const fetchShoppingList = () => {
        axios({
            method: 'GET',
            url: '/list',
        }).then((response) => {
            // response.data is what we sent from the server
            console.log(response.data);
            setShoppingList(response.data);
        }).catch((error) => {
            console.log(error);
            alert('Error making GET request.');
        })
    }

    // POST the creature to our server
    const addItem = (evt) => {
        evt.preventDefault(); // prevent default reload
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
        setItemName('');
        setItemQuantity('');
        setItemUnit('');
    }


    // Uses DELETE to remove all items from the list
    const clearItems = () => {
        axios.delete('/list/clear')
            // axios({
            //     method: 'DELETE',
            //     url: '/list/clear'
            // })
            .then(response => {
                console.log('DELETE /list/clear', response);
                fetchShoppingList();
            }).catch(error => {
                console.log('DELETE /list/clear has failed:', error);
            });
    }

    // Code added by Asif
    const removeItem = (itemID) => {
        console.log('in REMOVE ITEM client side', itemID);
        axios.delete('/list/' + itemID)
            .then(response => {
               console.log('DELETE /single', response.data);
                fetchShoppingList();
            }).catch(error => {
               console.log('DELETE /single error', error);
            });
    }
    // End of code added by Asif

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
                            value={itemName}
                            type="text"
                            placeholder="EG: Apples"
                            onChange={(evt) => setItemName(evt.target.value)}
                        /><br /><br />
                        <label>
                            Quantity:
                        </label><br />
                        <input
                            value={itemQuantity}
                            type="number"
                            placeholder="EG: 5"
                            onChange={(evt) => setItemQuantity(evt.target.value)}
                        /><br /><br />
                        <label>
                            Unit:
                        </label><br />
                        <input
                            value={itemUnit}
                            type="text"
                            placeholder="Unit (EG: Lbs)"
                            onChange={(evt) => setItemUnit(evt.target.value)}
                        /><br /><br />
                        <button type="submit">Submit</button>
                    </form>
                    <button onClick={() => clearItems()}>Clear All</button>
                </div>

            </main>
            <div className="items">
                {shoppingList.map(shopping =>
                (<Item
                    item={shopping}
                    removeItem={removeItem} />)
                )}
            </div>
        </div>
    );
}

export default App;