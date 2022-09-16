import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail";
import useParams from "react-router-dom";

const producto = {
    id:1, image:"", tittle:"chocolate"
};

export const ItemDetailContainer = ()=>{
    const [data, setData]= useState([]); 
    const {detalleid} = useParams();

        useEffect(()=>{
            const getData= new Promise((resolve=>{
                setTimeout(()=>{
                    resolve(producto);
                },3000);
            }))
            getData.then(res=>setData(res.find=>(productos=>productos.id===parseInt(detalle.id))));
        })
    return(
        <ItemDetail data={data}/>
    );
}


export default ItemDetailContainer;