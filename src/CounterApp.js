import React,{useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value = 0}) => {

    const [contador, setContador] = useState(0);

    //handleAdd
    const handleAdd = (e) => {
        // console.log(e);
        setContador(contador+1);
    }
    const handleReset = (e) => {
        setContador(value);
    }
    const handleSubstract = (e) => {
        setContador(contador-1);
    }

    return (
        <>
            <h1>Counter App</h1> 
            <h2>{contador}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value:PropTypes.number
}

export default CounterApp;
