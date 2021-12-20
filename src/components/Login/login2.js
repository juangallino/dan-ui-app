import React from 'react';
import { Link, Redirect, useHistory } from "react-router-dom";
import  './style.css'

class segundologin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            cuit:"",
            user:"",
            password:"",
            idCliente:"",
            datosCargados:false,
            datoUser: JSON, 
            logueado: false,
            usr:"",
            psw:""
         }


        }
         cambioValor=(e) =>{
            const   state=this.state;
            state[e.target.name]=e.target.value;
            this.setState({state});    
            }
        
            checkCuit=(e)=>{
                const headers = { 'Content-Type': 'application/json' }
                
                const { datoUser}=this.state;
                console.log("1")
                fetch("http://localhost:1000/usuarios/api/cliente/cuit/"+ this.state.cuit   )                  
                    .then(response=>response.json())
                    .then((datosResponse)=>{
                        
                        this.setState({datosCargados:true, datoUser:datosResponse, idCliente:datosResponse.id});
                        console.log(datosResponse);
                        console.log(this.state.idCliente);
                        console.log("2");
                        this.checkUsuario(e);
                    })
                    .catch()

                    
                     
        
            } 
            
            checkUsuario= (e) =>{
                e.preventDefault();              
               console.log("3");              
                             
                const {user, password, datoUser,idCliente, usr, psw}=this.state;
            
        
            if(datoUser.user.user==user || datoUser.user.password==password){   
                console.log("ok.");
                 window.location.href="/info/obras/" + idCliente
                
            }
                else{
                    console.log("usr db"+usr);
                    console.log(user);
                    console.log("pass db" +psw);
                    console.log(password);
                    console.log("Error de inicio de sesion");
                }
                console.log("4");
            }


    
    render() { 
           
        const {datoUser,user,password, cuit, idCliente}=this.state;
        return ( 
    <div className="card-body center " > 
        

            <div className="card centerCard">   
            <h1>Login</h1>
                    
                <div className="txt_field"  >
                    <label htmlFor="">CUIT</label>
                    <input type="text" id="labelCuit" name="cuit" value={cuit} onChange={this.cambioValor}  className="form-control" placeholder="cuit" aria-describedby="helpId"/>
                   
                </div> 

                <div className="txt_field" id="user"  >
                    <label htmlFor="">User</label>
                    <input type="text" name="user" value={user} onChange={this.cambioValor} id="user" className="form-control" placeholder="User" aria-describedby="helpId"/>
                </div>

                <div className="txt_field" id="pass" >
                    <label htmlFor="">Password</label>    
                    <input type="password" name="password" value={password} onChange={this.cambioValor} id="password" className="form-control" placeholder="Password" aria-describedby="helpId"/>
                </div>

            

             

            <div className="btn-group pepe" role="group" aria-label="">
                <button type="submit" onClick={this.checkCuit} className="btn">LogIn</button> 
                                            
            </div>
            <div className="btn-group pepe2" role="group" aria-label="" >
                <button  className="btn" >Not member? Signup</button> 
                                            
            </div>

            </div>
        
        <div className="card-footer text-muted">
            <small id="helpId" className="text-muted">Login usuario registrado</small>
        </div>
    </div>
    
    
     );
    }
}
 
export default segundologin;