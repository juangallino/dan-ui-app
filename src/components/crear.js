import React from 'react';
import { Link } from 'react-router-dom';
class crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            nombre:"",
            correo:"",
            descripcion:"",
            direccion:""
         }
       
    }
    cambioValor=(e) =>{
    const   state=this.state;
    state[e.target.name]=e.target.value;
    this.setState({state});    
    }
    enviarDatos= (e) =>{
        e.preventDefault();
    console.log("form enviado..")
    const {nombre, correo}=this.state;
    console.log(nombre);
    console.log(correo);
    }
    render() {
        
        const {direccion,descripcion, cuit, nombre, correo}=this.state;
        return ( 
            
            <div className="card">
                <div className="card-header">
                    Empleados
                </div>
                <div classname="card-body" >
                    <form onSubmit= {this.enviarDatos} > 

                    <div className="form-group" >
                      <label htmlFor="">Descripcion</label>
                      <input type="text" name="decripcion" value={descripcion} onChange={this.cambioValor} id="desc" className="form-control" placeholder="" aria-describedby="helpId"/>
                      
                    </div>                   

                    <div className="form-group" >
                      <label htmlFor="">Direccion:</label>
                      <input type="text" name="direccion"  onChange={this.cambioValor} id="dir" className="form-control" placeholder="" aria-describedby="helpId"/>                      
                    </div>

                    <div className="form-group" >
                      <label htmlFor="">Cuit:</label>
                      <input type="text" name="cuit" value={cuit} onChange={this.cambioValor} id="nombre" className="form-control" placeholder="" aria-describedby="helpId"/>
                      <small id="helpId" className="text-muted">Escribir nombre del empleado</small>
                    </div>

                    <div className="form-group" >
                      <label htmlFor="">Nombre:</label>
                      <input type="text" name="nombre" value={nombre} onChange={this.cambioValor} id="nombre" className="form-control" placeholder="" aria-describedby="helpId"/>
                      <small id="helpId" className="text-muted">Escribir nombre del empleado</small>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Correo</label>
                      <input type="email" name="correo" value={correo} onChange={this.cambioValor} id="corre" className="form-control" placeholder="" aria-describedby="helpId"/>
                      <small id="helpId" className="text-muted">Escribir correo del empleado</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Correo</label>
                      <input type="email" name="correooo" value={direccion} onChange={this.cambioValor} id="correoo" className="form-control" placeholder="" aria-describedby="helpId"/>
                      <small id="helpId" className="text-muted">Escribir correo del empleado</small>
                    </div>

                    </form>

                    <div className="btn-group" role="group" aria-label="">
                        <button type="submit" onClick={this.enviarDatos} className="btn btn-success">Agregar nuevo empleado</button>
                        <Link type="button" className="btn btn-primary" to={"/"} >Cancelar</Link>
                       
                        
                    </div>
                    
                </div>
                
                <div classname="card-footer text-muted">
                <small id="helpId" classname="text-muted">Alta de empleado</small>
                 </div>
            </div>
         );
    }
}
 
export default crear;