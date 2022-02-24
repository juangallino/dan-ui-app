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