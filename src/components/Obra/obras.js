import React from 'react';
import { Link } from "react-router-dom";

import infouser from '../Usuarios/infoUser';


class obras extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idCliente: this.props.match.params.id,
            datosCargados:false,
            listaObras:[]
        }
    }



    cargarDatos(){
        const headers = { 'Content-Type': 'application/json' }
        
        fetch("http://localhost:1000/usuarios/api/obra/obrasCliente/" + this.props.match.params.id )                  
            .then(response=>response.json())
            .then((datosResponse)=>{
                this.setState({datosCargados:true, listaObras:datosResponse})
                console.log(datosResponse)
            })
            .catch(console.log)
            
    }

    componentDidMount(){
        this.cargarDatos()       
    
    }    


    render() { 
        const{idCliente,datosCargados, listaObras,  } = this.state
        if(!datosCargados){
            return(     
                
                <div className="center">Cargando...</div>);}
        else 
        { 
             return (

        <div>
           

            <div className="card">
             <div className="card-header">
                 <Link className="btn btn-success"to={"/info/alta-obra/"+ idCliente }> Agregar Obra</Link>                 
                
             </div>
             <div className="card-body">
                 <h4>Lista de Obras</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Descripcion</th>
                        <th>Direccion</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    listaObras.map(
                        (obra)=>(
                            <tr key={obra.id}>                            
                                <td>{obra.id}</td>
                                <td>{obra.descripcion}</td>
                                <td>{obra.direccion}</td>
                                <td>{obra.tipo.descripcion}</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="">
                                    <Link className="btn btn-primary" to={"/editar"}>Editar</Link> 
                                    <button type="button" className="btn btn-danger">Borrar</button> 
                                    <Link className="btn btn-warning" to={"/info/pedidos/"+ obra.id}>Administrar Pedidos</Link>                       
                                    </div>
                                </td>
                            </tr>
                             )
                     )
                
                     }
            
          
                </tbody>
            </table>

            </div>
                <div className="card-footer text-muted">     footerrr  </div>
            </div>
        </div>
              );
    }
}
}
 
export default obras;