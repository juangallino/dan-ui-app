import React from 'react'

const CartItem = ({data, deleteFromCart}) => {
    let{id, descripcion, precio, unidad, cantidad} = data;
    return (
        <div style={{border:"thin solid gray", padding:"1rem", margin:"1rem" }}>

            <h4>{descripcion}</h4>           
            <h5>${precio}.00 x {cantidad} = ${precio * cantidad}.00</h5>
            
            <a onClick={()=> deleteFromCart(id, false)} class="btn btn-danger"  role="button">-1</a>-
            <a onClick={()=> deleteFromCart(id, true)} class="btn btn-danger"  role="button">Elimitar todos</a>
        </div>
    )
}

export default CartItem
