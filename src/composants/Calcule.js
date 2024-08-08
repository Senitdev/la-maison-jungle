import { useState } from "react";

export default function Division(){
    let[resultat, updateReseultat]=useState(0);    
     function handClic(e){
    e.preventDefault();
    let nb1=e.target['nb1'].value;
    let nb2=e.target['nb2'].value;
    let signe=e.target['signe'].value;
    if(signe==='+'){
        resultat=parseFloat(nb1)+parseFloat(nb2);
    }
    if(signe==='-'){
        resultat=parseFloat(nb1)-parseFloat(nb2);
    }
    if(signe==='*'){
        resultat=parseFloat(nb1)*parseFloat(nb2);
    }
        
        updateReseultat(resultat);
    };
    const[checked,updateCheck]=useState(true);
    const handleCheck=()=>{
        console.log(checked);
updateCheck(!checked);
    }
    return<div>
        <form onSubmit={handClic}>
        <label>Nbre1</label>
        <input type="number"  name="nb1"></input>
        <label>Nbre2</label>
        <input type="number" name="nb2"></input>
        <select name="signe">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
        </select>
        <input type="checkbox" checked={checked} onChange={handleCheck}></input>
        <button disabled={!checked}>Valider</button>
        <p>Resultat: {resultat}</p>
        </form>
    </div>
}