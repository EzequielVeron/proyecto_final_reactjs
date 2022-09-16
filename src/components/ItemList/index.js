import Item from "../Item";
import React from "react";


const ItemList= () =>{
    return (
            data.map(producto=> <Item key={producto.id} info={producto}/>)
    );
}

export default ItemList