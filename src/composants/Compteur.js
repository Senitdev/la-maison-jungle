import { useState } from "react";

function Compteur(){
    const [compte,updateCompte]=useState(1);
const handleClic=()=>{
    updateCompte(compte+1);
}
    return<div>
        <h2>Compteur:{compte}</h2>
        <button onClick={handleClic}>Incrementer</button>
    </div>
}
export default Compteur