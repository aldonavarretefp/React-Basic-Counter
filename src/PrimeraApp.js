// import React ,{Fragment} from 'react'
import React from 'react'
import PropTypes from 'prop-types';

const PrimeraApp = ( {saludo,otra = "No hay 'otra'"}) => {

    const saludoVar = "Hola mundo const"
    const isActive = false;
    const numeros = [1,2,3,4,5,6];
    const objeto = {
        nombre:"Aldo",
        edad:"20"
    }
    // if(!saludo){
    //     throw new Error("Saludo es necesario");
    // }
    return (
        <>
            <h1>
                Hola Mundo
            </h1>
            <p>{saludoVar}</p>
            <p>Hola mundo HTML</p>
            {
                isActive && 
                <h2>Active</h2>
            }
            <h1>{numeros}</h1>
            {/* {numeros.map(
                (el) =>(
                    <i> {el} </i>
                )
            )} */}
            <pre>{JSON.stringify(objeto,null,3)}</pre>
            <h1>{saludo}</h1>
            <h1>{otra }</h1>
            
        </>
    );
}

PrimeraApp.propTypes = {
    // saludo: PropTypes.string
    saludo: PropTypes.string.isRequired


}

PrimeraApp.defaultProps = {
    subtitulo:''
}


export default PrimeraApp
