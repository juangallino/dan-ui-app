import React from 'react';
import { Link } from "react-router-dom";

class Pedidos extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

            idObra: this.props.match.params.id,
            datosCargados:false,
            listapedido:[]
            
         }
    }

    cargarDatos(){
        const headers = { 'Content-Type': 'application/json' }
         fetch("http://localhost:1000/pedidos/api/pedido/obra/listapedidos/"+ this.props.match.params.id)                  
            .then(response=>response.json())
            .then((datosResponse)=>{
                this.setState({datosCargados:true, listapedido:datosResponse})
                console.log(datosResponse)
            })
            .catch(console.log)
            
            
    }

    componentDidMount(){
        this.cargarDatos();
        
    
    }

    render() { 
        const{datosCargados,listapedido, idObra}= this.state
        if(!datosCargados){
            return(  <div classname="center">Cargando...</div>);}
        if(listapedido.length==0){
                return(
                <div>
                    
                    <div className="card-header">
                    <Link className="btn btn-success"to={"/info/alta-pedido/" +idObra}> Alta Pedido</Link>
                    </div>
                     <div class="center">LISTA VACIA.</div>
                </div>);
        }
        else 
        { 
             return (  

           <div className="card">
                <div className="card-header">
                
                <Link className="btn btn-success"to={"/info/alta-pedido/" +idObra}> Alta Pedido</Link>
                </div>
                {
                listapedido.map(
                    (pedido)=>(
                    <div className="card border-primary">                      
                      <div className="card-body">
                        <h4 className="card-title">Pedido</h4>
                        <p classname="card-text">Id: {pedido.id}</p>
                        <p classname="card-text">Fecha: {pedido.fechaPedido}</p>
                        <p classname="card-text">Tipo de obra: {pedido.obra.descripcion}</p>
                        <p classname="card-text">Estado del Pedido: {pedido.estado.estado}</p>
                        <a name="" id="" classname="btn btn-primary" href="#" role="button">Ver Detalle</a>
                      </div>
                    </div>
                    )
                )}
                    
             </div>
              );
    }
}
}
 
export default Pedidos;