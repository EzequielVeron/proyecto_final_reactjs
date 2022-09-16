import React from "react";

export const ItemDetail = ({data})=>{
    return(
        <div className="container">
            <div className="detail" >
                <img className="detail__image" src={data.image} alt="" />
                <div>
                    <h1>{data.tittle}</h1>
                </div>

            </div>

        </div>
    );
}


export default ItemDetail;