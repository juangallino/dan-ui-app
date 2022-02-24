import React from 'react';
import { Link } from "react-router-dom";
import MaterialesCard from './MaterialesCard';





class altaPedido extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            idObra: this.props.match.params.id,            
            listaMaterial:[],
            descripcion:"",
            direccion:"", 
            latitud:"",
            longitud:"",
            superficie:"",
            tipoid:"",
            respuesta:"",
            responsoOK:false
         }
       
    }


    componentDidMount(){
        this.cargarDatos()     
    
    }    

    cambioValor=(e) =>{
    const   state=this.state;
    state[e.target.name]=e.target.value;
    this.setState({state});    
    }

    cargarDatos(){

         fetch("http://localhost:1000/productos/api/material")                  
            .then(response=>response.json())
            .then((datosResponse)=>{
                this.setState({datosCargados:true, listaMaterial:datosResponse})
                console.log(datosResponse)
            })
            .catch(console.log)
            
            
    }

    enviarDatos= (e) =>{
        e.preventDefault();
    const {idObra,respuesta}=this.state;  

    var nuevopedido={         
     "obra": {
        "id": idObra
      },
      "detalle": [
        {          
          "producto": {
            "id": 3,            
            "precio": 50.0
          },
          "cantidad": 21
          
        },
        {          
          "producto": {
            "id": 2,       
            "precio": 550.0
          },
          "cantidad": 6
        }
      ],
      "estado": {        
      }
    }                
       
        fetch("http://localhost:1000/pedidos/api/pedido/", {
            method:"POST",
            headers: {'Content-Type': 'application/json'},      
            body:JSON.stringify(nuevopedido)
        })                
                .then(  response=> { 
                    if(response.ok){
                        response.text();
                        //this.setState({respuesta:response});
                        
                        console.log("respuesta ok "+ response);
                                                      
                    }else{  
                         console.log("respuesta F sad");                             
                         throw new Error(response.status); 
                        } 
                    })
                .then((datosResponse)=>{
                        this.setState({respuesta:datosResponse});                       
                        console.log( datosResponse);
                        window.alert("Pedido cargado con exito!"+ respuesta);           
                        console.log("Pedido cargado con exito, El estado del pedido es: "+ respuesta);
                        })
                .catch(error => { console.log(error);  window.alert("Error al enviar el pedido, Revise su situacion crediticia: "+ error) })

                
                

                
               
                

            /* .then(response=>response.text())
            .then((datosResponse)=>{
                                    this.setState({respuesta:datosResponse});                
                                    console.log("Pedido cargado con exito, El estado del pedido es: "+ respuesta);
                                    })*/
            
            
        }
    
          
    
    
    render() {
        
        const {listaMaterial, idObra}=this.state;
        let obra={id: idObra}
        return ( 
            
        <div>  
            <div className="card">
                <div className="card-header">
                    <Link className="btn btn-success"to={"/info/pedidos/"+ idObra}> Atras </Link>                 
                
                </div>
                <div className="conteiner"> 
                    <MaterialesCard key={idObra}  data={obra}/>   
                  <a style={{width:"100%", padding:"1rem" }} class="btn btn-success" href="#" onClick={this.enviarDatos} role="button">Comprar Carrito</a>
                </div>   

            </div>
                
            
        </div>

         );
    }
}
 
export default altaPedido;