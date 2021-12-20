import React from 'react';
import { Link } from "react-router-dom";


class Infouser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return (
            <div>
<ul class="nav nav-tabs">
    <li class="nav-item">
        <a href="#" class="nav-link active">Home</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link active">Obras</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link active">Pedidos</a>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Gestionar</a>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Obras</a>
            <a class="dropdown-item" href="#">Pedidos</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Action</a>
        </div>
    </li>    
</ul>

            <div classname="card  center">
            <p classname="card-text">Cuit</p>
              <div classname="card-body">
                <h4 classname="card-title">Nombre del usuario</h4>                
              </div>
            </div>
            </div>
          );
    }
}
 
export default Infouser;