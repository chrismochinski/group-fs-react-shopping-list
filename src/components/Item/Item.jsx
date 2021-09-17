import './Item.css';
/**
 * The Item component: renders an item within the shopping list, showing the
 * item's name, the desired amount of purchase, and the option to either buy the
 * item or remove it from the list.
 * 
 * @param {*} props The props call: should contain the item object, which 
 * contains all necessary information to create Item
 */
function Item(props) {

    const buyButton = (itemID) => {
        return <button class = "buy-button" 
        data-id={props.item.id} onClick= {props.buyItem}>Buy</button>;
    }

    const deleteButton = (itemID) => {
        return <button class = "remove-button" 
        data-id={props.item.id} onClick= {props.removeItem(itemID)}>Delete</button>;
    }

    const itemToggling = (itemID) => {
        return props.item.purchased ? <p>Purchased</p> : <>{buyButton()} {deleteButton(itemID)}</>;
    };
    //Things to 
    return <div key = {props.item.id} class = "item_block">
        <p><b>{props.item.item}</b></p>
        <p>{props.item.quantity} {props.item.unit}</p>
        {props.item.purchased ? <p>Purchased</p> : <>
<button onClick={() => props.buyItem(props.item.id)}>Buy</button>
<button onClick={() => props.removeItem(props.item.id)}>Delete</button></>}
        
    </div>;
//{props.item.purchased ? <p>Purchased</p> : <>
//<button class = "buy-button" 
//data-id={props.item.id} onClick= {props.buyItem}>Buy</button>
//<button class = "remove-button" 
//data-id={props.item.id} onClick= {props.removeItem}>Delete</button></>}
}

export default Item;