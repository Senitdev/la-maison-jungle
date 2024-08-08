import { useState } from "react";

function CalculeSomme(){
let [somme,updateSomme]=useState(2)
const handclicSomme=()=>{
updateSomme(somme+2);
}
return<div>
    <button onClick={handclicSomme}>vaider</button>
    <p>Resultat:{somme}</p>
</div>

}
export default CalculeSomme