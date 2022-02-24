import React from 'react';
import { Link } from 'react-router-dom';


class altaObra extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            idCliente: this.props.match.params.id,
            descripcion:"",
            direccion:"", 
            latitud:"",
            longitud:"",
            superficie:"",
            tipoid:""
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
    const {idCliente,descripcion,direccion,latitud, longitud, superficie, tipoid}=this.state;
    const headers = { 'Content-Type': 'application/json' }

    var nuevaObra={
      "cliente": {    
        "id": idCliente,          
        "obras": [null]        
      },        
      "descripcion": descripcion,
      "direccion": direccion,
      "latitud":latitud	,
      "longitud": longitud,
      "superficie": superficie
      ,
      "tipo": {        
        "id": tipoid
      }
    }
   
        
    fetch("http://localhost:1000/usuarios/api/obra/", {
      method:"POST",
      headers: {
        
        'Content-Type': 'application/json'
      },      
      body:JSON.stringify(nuevaObra)
    })                  
        .then(response=>response.json())
        .then(
            window.alert("Obra creada con exito")
        )
        .catch(console.log)    
    }
    render() {
        
        const {idCliente,descripcion,direccion,latitud, longitud, superficie, tipoid }=this.state;
        return ( 
            
            <div className="card centerCard2" >
                <div className="card-header centerCard">
                <Link className="btn btn-success"to={"/info/obras/"+ idCliente}> Atras </Link>     
                </div>
                <div classname="card-body margen" >
                    <form onSubmit= {this.enviarDatos} > 


                    <div className="form-group" >
                      <label htmlFor="">Descripcion</label>
                      <input type="text" name="descripcion" value={descripcion} onChange={this.cambioValor} id="descripcion" className="form-control" placeholder="" aria-describedby="helpId"/>
                      
                    </div>                   

                    <div className="form-group input" >
                      <label htmlFor="">Direccion:</label>
                      <input type="text" name="direccion" value={direccion} onChange={this.cambioValor} id="dir" className="form-control" placeholder="" aria-describedby="helpId"/>                      
                    </div>

                    <div className="form-group" >
                      <label htmlFor="">Latitud:</label>
                      <input type="number" name="latitud" value={latitud} onChange={this.cambioValor} id="latitud" className="form-control " placeholder="" aria-describedby="helpId"/>                      
                    </div>
                   

                    <div className="form-group">
                      <label htmlFor="">Longitud</label>
                      <input type="number" name="longitud" value={longitud} onChange={this.cambioValor} id="longitud" className="form-control" placeholder="" aria-describedby="helpId"/>
                   
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Superficie</label>
                      <input type="number" name="superficie" value={superficie} onChange={this.cambioValor} id="superficie" className="form-control" placeholder="" aria-describedby="helpId"/>
                      
                    </div>

                   

                    <div class="form-group">
                      <label for="tipoid">Tipo de Obra</label>
                      <select class="form-control" value={tipoid} onChange={this.cambioValor} name="tipoid" id="tipoid">
                      <option value="1">----Seleccionar----</option>
                        <option value="1">REFORMA</option>
                        <option value="2">CASA</option>
                        <option value="3">EDIFICIO</option>
                        <option value="4">OBRA PUBLICA</option>
                      </select>
                    </div>

                    

                    

                    <div className="btn-group" role="group" aria-label="">
                    <Link type="button" className="btn btn-primary" to={"/info/obras/" +idCliente} >Cancelar</Link>
                        <button type="submit"  className="btn btn-success">Agregar Obra</button>
                        
                       
                        
                    </div>
                    </form>
                    
                </div>
                
                <div classname="card-footer text-muted">
                <small id="helpId" classname="text-muted">Alta de Obra</small>
                 </div>
            </div>
         );
    }
}
 
export default altaObra;