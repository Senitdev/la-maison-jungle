import { useState } from "react";
import "../styles/Fruits.css";
export default function Fruits({mesFruits}){
   const [listeFruits,updateFruits]=useState([
    {
        id:1,
        libelle:"Pomme"
    },
    {
        id:2,
        libelle:"Bannane"
    },
    {
        id:3,
        libelle:"Fraise"
    }
   ]);
   function ajoutProduit(e){
   e.preventDefault();
    let libelle=e.target['libelle'].value;
    let id=new Date().getSeconds();
    const addProduit=[...listeFruits];
    addProduit.push({id,libelle});
    updateFruits(addProduit);  
   e.target['libelle'].value="";
}
   function handledelete(id){
  const copyFruit=[...listeFruits];
  const copyFruitUpdated=copyFruit.filter((listeFruits)=>listeFruits.id!==id);
  updateFruits(copyFruitUpdated);
   }
   return<div className="liste">
    <ul>
        {listeFruits.map((elt)=>(
            <li key={elt.id}>{elt.id} {elt.libelle} <button onClick={()=>handledelete(elt.id)}>Supprimer</button></li>
        ))}
    </ul>
    <form onSubmit={ajoutProduit}>
        <label>Designation</label>
        <input type="text" name="libelle"></input>
        <button>Ajouter</button>
    </form>
   </div>
}