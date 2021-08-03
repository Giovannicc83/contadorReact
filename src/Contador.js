import { useState} from "react";



//Opcion 1
// const Contador = ({valor}) => {
    
//     const [conteo, setConteo] = useState(valor);
//     const handleIncrease = () =>{
//         setConteo (conteo + 1);
//     }

//     const handleDecrease = () =>{
//         setConteo (conteo - 1);
//     }

//     const handleReset = () =>{
//         setConteo (valor);
//     }

//     return (
//         <>
//             <h1>Contador</h1>
//             <h2>{conteo}</h2>
//             <button onClick={handleIncrease} >+</button>
            
//             <button onClick={handleReset} >RESET</button>
            
//             <button onClick={handleDecrease} >-</button>
//         </>
//     )
// }

// export default Contador;




//Opcion 2
const Contador = ({valor}) => {
    
    const [conteo, setConteo] = useState(valor);
    return (
        <>
            <h1>Contador</h1>
            <h2>{conteo}</h2>
            <button onClick={() => setConteo (conteo + 1)} >+</button>            
            <button onClick={() => setConteo (valor)} >RESET</button>            
            <button onClick={() => setConteo (conteo - 1)} >-</button>
        </>
    )
}
export default Contador;
