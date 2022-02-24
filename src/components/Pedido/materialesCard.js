import React, { useReducer } from 'react'
import { TYPES } from '../../actions/shoppingActions';
import { shoppingReducer, shoppingInitialState} from '../../reducers/shoppingReducer'
import CartItem from './CartItem';
import ProductoItem from './ProductoItem';
import {Producto} from '../../model/Producto';
import {Detalle} from '../../model/Detalle';
import {listaDetalle} from '../../model/listaDetalle';

const MaterialesCard = ({data}) => {
    let{id} = data;
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const {detalles, productos,cart}=state;
    
            
       
     
    
const addToCart = (id) =>{ 
        dispatch({type: TYPES.ADD_TO_CART, payload:id});
}

const deleteFromCart = (id, all=false) =>{
    console.log(id, all)
    if (all) 
    {
        dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload:id});       
    }else{
        dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload:id});
    }
}



const clearCart = () =>{
    dispatch({type: TYPES.CLEAR_CART});
}


const enviarDatos22= (e) =>{
    
        e.preventDefault();        
       console.log("id de la obra: "+ id);
    
    var detalle = []
    let respuesta=""

    while(cart.length !=0){
        let test= cart.pop();   
        let p = new Producto(test.id,test.precio);
       var listaDetalle= new Detalle( p , test.cantidad);     
       detalle.push(listaDetalle);
    }
    var nuevopedido={         
        "obra": {
           "id": id
         },
         detalle
         ,
         "estado": {        
         }
       } 
       

        fetch("http://localhost:1000/pedidos/api/pedido/", {
            method:"POST",
            headers: {'Content-Type': 'application/json'},      
            body:JSON.stringify(nuevopedido)
        })                
                /*.then(  response=> { 
                    if(response.ok){
                        response.text();
                      //  this.setState({respuesta:response});                        
                        console.log("respuesta ok "+ response.text());
                                                      
                    }else{  
                         console.log("respuesta F sad");                             
                         throw new Error(response.status); 
                        } 
                    })*/ 
                //.then(response=>response.json())            
                .then((datosResponse)=>{   
                        respuesta=JSON.stringify(datosResponse);
                        window.alert("Pedido cargado con exito! ESTADO: "+ respuesta);           
                        console.log("Pedido cargado con exito, El estado del pedido es: "+ JSON.stringify(datosResponse));
                        })
                .catch(error => { console.log(error);  window.alert("Error al enviar el pedido, Revise su situacion crediticia: "+ error) })

              
                
                console.log(nuevopedido);
                clearCart();
               
                

            /* .then(response=>response.text())
            .then((datosResponse)=>{
                                    this.setState({respuesta:datosResponse});                
                                    console.log("Pedido cargado con exito, El estado del pedido es: "+ respuesta);
                                    })*/
            
            
                                }

const enviarDatos= (e) =>{
    e.preventDefault();
    console.log(cart);
    
}

    return (
        <div>
            <h3>Carrito de compras</h3>
            <i className="fas fa-h2    ">Productos Disponibles</i>
            <article className="box grid-responsive">

            {productos.map((producto)=> (
                        <ProductoItem key={producto.id} data={producto} addToCart={addToCart}/>  
                            )
                        )
                    }
             </article>

            <i class="fas fa-h3">Carrito</i>
            <article className="box">

            <a  class="btn btn-primary" onClick={()=> clearCart()} role="button">Limpiar Carrito</a>
            {
                cart.map((item, index)=> <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />)
            }
            </article>
            <a style={{width:"100%", padding:"1rem" }} class="btn btn-success" href="#" onClick={enviarDatos22} role="button">Comprar Carrito</a>
        </div>
    )
}

export default MaterialesCard
