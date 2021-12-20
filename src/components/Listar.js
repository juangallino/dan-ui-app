import { Modal } from 'bootstrap';
import React from 'react';
import { Link } from "react-router-dom";

class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados:false,
            empleados:[]
         }
    }

    cargarDatos(){
        const headers = { 'Content-Type': 'application/json' }
        fetch("http://localhost:1000/usuarios/api/empleado/")                  
            .then(response=>response.json())
            .then((datosResponse)=>{
                this.setState({datosCargados:true, empleados:datosResponse})
                console.log(datosResponse)
            })
            .catch(console.log)
            
    }
componentDidMount(){
    this.cargarDatos()

}

    render() { 
        const{datosCargados, empleados}= this.state
        if(!datosCargados){
            return(             <div class="center">Cargando...</div>);}
        else 
        { 
             return ( 
             
             <div className="card">
                 <div className="card-header">
                     <Link className="btn btn-success"to={"/crear"}> Agregar empleado</Link>
                 </div>
                 <div class="card-body">
                     <h4>Lista de empleados</h4>
                 <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    empleados.map(
                        (empleado)=>(
                            <tr key={empleado.id}>                            
                            <td>{empleado.id}</td>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.mail}</td>
                            <td> <div class="btn-group" role="group" aria-label="">
                                <Link className="btn btn-primary" to={"/editar"}>editar</Link>
                                <button type="button" className="btn btn-danger">borrar</button>                        
                            </div></td>
                        </tr>
                        )
                    )
                }
                
              
            </tbody>
        </table>
                 </div>
                 <div className="card-footer text-muted">
                     
                 </div>
             </div>

              );
    }
}
}

 
export default Listar;