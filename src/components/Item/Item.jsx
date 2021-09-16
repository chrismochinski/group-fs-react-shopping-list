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

    const buyButton = () => {
        return <button class = "buy-button" 
        data-id={props.item.id} onClicked= {props.buyItem}>Buy</button>;
    }

    const deleteButton = (itemID) => {
        return <button class = "remove-button" 
        data-id={props.item.id} onClicked= {props.removeItem(itemID)}>Delete</button>;
    }

    const itemToggling = (itemID) => {
        return props.item.purchased ? <p>Purchased</p> : <>{buyButton()} {deleteButton(itemID)}</>;
    };
    //Things to 
    return <div class = "item_block">
        <p><b>{props.item.item}</b></p>
        <p>{props.item.quantity} {props.item.unit}</p>
        {itemToggling(props.item.id)}
    </div>;

}

export default Item;