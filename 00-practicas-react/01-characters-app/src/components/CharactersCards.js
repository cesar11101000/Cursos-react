import React from 'react';
import '../estilos.css';

export const CharactersCards = ({
    nombre,
    alias,
    edad,
    nacionalidad,
    puesto
}) => {
    

    const id = alias.toLowerCase();

    return (
        <div className="card ms-3 mt-3" style={ { maxWidth: 200 } }>
          
            <div className="row no-gutters">

                <div className="col-ms-4 mt-1 desvanecer">
                    <img src={`./assets/bts/${ id }.jpg`} className="card-img" alt={ alias } />              
                </div>

                <div className="col-md-12 div-text">
                    <div className="card-body">
                        <h5 className="card-title"> <strong>{ alias }</strong> </h5>
                        <p className="card-text"> <strong>{ nombre }</strong></p>
                        <p className="card-text">
                            <strong>Edad:</strong> { edad } años
                        </p>
                        <p className="card-text">
                            <strong>Origen: </strong>{ nacionalidad } 
                        </p>
                        <p className="card-text">
                             { puesto } 
                        </p>
                        
                    </div>
                </div>
          
            </div>
        </div>
    )
}
