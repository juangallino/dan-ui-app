import React from 'react';
import { Link } from "react-router-dom";
import MaterialesCard from './materialesCard';



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
            tipoid:""
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
    const {idObra,descripcion,direccion,latitud, longitud, superficie, tipoid}=this.state;
    console.log("form enviado..");
     console.log(idObra)
    
    const headers = { 'Content-Type': 'application/json' }

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
          "cantidad": 50
          
        },
        {          
          "producto": {
            "id": 1,       
            "precio": 850.0
          },
          "cantidad": 500         
        }
      ],
      "estado": {        
      }
    }
    
    console.log(nuevopedido)
    console.log(JSON.stringify(nuevopedido))
        
    fetch("http://localhost:1000/pedidos/api/pedido/", {
      method:"POST",
      headers: {        
        'Content-Type': 'application/json'
      },      
      body:JSON.stringify(nuevopedido)
    })                  
        .then(response=>response.json())
        .then((datosResponse)=>{
            console.log(datosResponse)
        })
        .catch(console.log)    
    }
    render() {
        
        const {listaMaterial, idObra}=this.state;
        return ( 
            
        <div>  
            <div className="card">
             <div className="card-header">
                 <Link className="btn btn-success"to={"/info/pedidos/"+ idObra}> Atras </Link>                 
               
             </div>
            <div className="conteiner"> 
                <MaterialesCard/>
                <div class="row">
                    <div class="col-xs-1-12">
                        <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Title</h3>
                            <p class="card-text">Precio</p>
                            <a name="" id="" class="btn btn-primary" href="#" role="card-button">agregar</a>
                        </div>
                        </div>
                    </div>
                    <div class="col-xs-1-12">
                        <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Title 2</h3>
                            <p class="card-text">Precio 2</p>
                            <a name="" id="" class="btn btn-primary" href="#" role="card-button">agregar 2</a>
                        </div>
                        </div>
                    </div>

                </div>
                            
                        
            
            </div>
             
            <div className="card-body">
                 <h4>Carrito de Materiales</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Unidad</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    listaMaterial.map(
                        (material)=>(
                            <tr key={material.id}>                            
                                <td>{material.id}</td>
                                <td>{material.descripcion}</td>
                                <td>{material.precio}</td>
                                <td>{material.unidad.descripcion}</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="">
                                    <input type="number" name="material.descripcion" value={material.id} onChange={this.cambioValor} id="latitud" className="form-control " placeholder="" aria-describedby="helpId"/>                     
                                    </div>
                                </td>
                            </tr>
                             )
                     )
                
                     }
            
          
                </tbody>
            </table>

            </div>
                <a name="" id="" class="btn btn-primary" href="#" onClick={this.enviarDatos} role="button">Comprar</a>
            </div>
        </div>
         );
    }
}
 
export default altaPedido;