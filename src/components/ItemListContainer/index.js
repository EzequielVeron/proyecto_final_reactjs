import React {useState, useEffect} from "react";
import Tittle from "../Tittle";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import {useParams} from "react-router-dom"

const productos= [
    {id: 1, image:"../public" tittle:"chocolate"},
    {id:2, image:"" tittle:"chocolate"},
    {id:3, image:"" tittle:"pasta de mani"},
];


export const ItemListContainer= ({texto}) =>{
    const [data, setdata] = useState([]),
    const {productoid} = useParams();

    useEffect(() =>{
        const getData=new Promise(resolve =>{
            setTimeout(()=> {
                    resolve(productos);
            }, 3000);
        })
        if(productoid){
            getData.then(res => setdata(res.filter(productos=>productos.producto === productoid)));
        } else{
            getData.then(res => setdata(res));
        }
    }, [productoid]);


    const onAdd= (quantity) => {
        console.log(`Compraste ${quantity} de unidades`);

    }
    return(
        <>
        <Tittle greeting={texto} />
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        <ItemList data={data}/>
        </>
    );
}


export default ItemListContainer;
