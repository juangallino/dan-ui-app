import React from 'react'

const ProductoItem = ({data,addToCart}) => {

    let{id, descripcion, precio, unidad} = data;
    return (
        <div style={{border:"thin solid gray", padding:"1 rem"}}>
            <div style={{marginLeft:"35%"}}>
                <i class="fas fa-h1    ">{descripcion}</i>
                <h5>${precio}.00</h5>
                <a  class="btn btn-primary" onClick={()=> addToCart(id)} role="button">Agregar</a>

            </div>
            
        </div>
    )
}

export default ProductoItem
