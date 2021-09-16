import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    let [shoppingList, setShoppingList] = useState([]);
    let [itemName, setItemName] = useState('');
    let [itemQuantity, setItemQuantity] = useState('');
    let [itemUnit, setItemUnit] = useState('')


  // This gets called with the component loads
  // Basically $(ready)
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
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
            <ul>
            {props.list.map(shoppingList => 
            (<li key={shoppingList.id}>{shoppingList.item} 
            {shoppingList.quantity} {shoppingList.unit}</li>)
            )}
        </ul>
        </div>
    );
}

export default App;
