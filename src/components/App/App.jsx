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
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
