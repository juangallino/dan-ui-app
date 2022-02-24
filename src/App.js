
import './App.css';

import { Route, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

import  Lista  from "./components/Listar";
import  CrearEmp  from "./components/crear";
import editarEmp  from "./components/editar";
import pedidos from "./components/Pedido/Pedidos";
import obras from "./components/Obra/obras"
import login2 from "./components/Login/login2"
import altaObra from "./components/Obra/altaObra"
import infouser from './components/Usuarios/infoUser';
import altaPedido from './components/Pedido/altaPedido';
//import materialesCard from './components/Pedido/materialesCard';



function App() {
  return (
    <Router>
   
      

      <div className="container"> 
       
      <Route exact path="/" component={login2}></Route>
      <Route path="/lista" component={Lista}></Route>
      <Route path="/crear" component={CrearEmp}></Route>
      <Route path="/editar" component={editarEmp}></Route>
      
      <Route path="/info/pedidos/:id" component={pedidos}></Route>
      <Route path="/info/alta-pedido/:id" component={altaPedido}></Route>

      <Route path="/info" component={infouser}></Route>

      <Route path="/info/Obras/:id" component={obras}></Route>
      <Route path="/info/alta-obra/:id" component={altaObra}></Route>
      
    </div>
    </Router>
    
  );
}


export default App;
