import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState={
productos:[ 
    {id: 1, descripcion: "Cemento",precio: 250.0, unidad:"UNIDAD"},
	{id: 2,descripcion: "Ladrillo",	precio: 550.0,unidad:  "UNIDAD"	},
	{id: 3, descripcion: "Tornillos", precio: 50.0,	unidad: "UNIDAD"},
	{id: 4,descripcion: "Arena",precio: 850.0,unidad:  "m2"}
    ],
cart:[]

};

export function shoppingReducer(state,action){
switch(action.type){
    case TYPES.ADD_TO_CART:{
       
        let newItem= state.productos.find(producto=> producto.id === action.payload);  
        let itemInCart= state.cart.find(item=> item.id === newItem.id);

        return itemInCart ? {
            ...state,
            cart: state.cart.map(item=> item.id === newItem.id ? {...item, cantidad: item.cantidad+1}:item)
        } :
        {
            ...state,
        cart:[...state.cart, {...newItem, cantidad:1}]

        }
        /*
            ...state,
        cart:[...state.cart, newItem]*/
    }  
    
    case TYPES.REMOVE_ONE_FROM_CART:{
        let itemToDelete = state.cart.find(item=> item.id===action.payload)
        return itemToDelete.cantidad >1 ? { 
            ...state,
            cart: state.cart.map((item)=> item.id === action.payload ? {...item, cantidad: item.cantidad-1} : item),
        }
        :{...state,
            cart: state.cart.filter((item)=> item.id !== action.payload),

         }
        
    }
    case TYPES.CLEAR_CART:{
        return shoppingInitialState;
        
    }
    case TYPES.REMOVE_ALL_FROM_CART:{
        return{
            ...state,
            cart: state.cart.filter((item)=> item.id !== action.payload),
             
        }
        
    }

}

}