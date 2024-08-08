import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function ContactList(){
    const[person,updatePersonne]=useState([]);
    useEffect(()=>{
        
        axios.get("http://localhost:9096/api/v2/personnes").then((resp)=>{
            updatePersonne(resp.data);
           });
    },
[]);
function deleteByID(id){
    let copyPersone=[...person];
axios.delete("http://localhost:9096/api/v2/personne/"+id).then((resp)=>{
    alert("Suppression effectuée avec succès");
copyPersone=copyPersone.filter((pers)=>pers.id!==id);
updatePersonne(copyPersone);
})
} 
    return<div>
    <table>
        <thead>
            <tr>
                <th>Prenom</th>
                <th>Nom</th>
                <th>Adresse</th>
                <th>Telephone</th>
                <th>Email</th>
                <th>Action</th>
                <th>Détails</th>
            </tr>
        </thead>
        <tbody>
            {person.map((elt)=>(
            <tr key={elt.id}><td>{elt.prenom}</td><td>{elt.nom}</td><td>{elt.adresse}</td><td>{elt.telephone}</td><td>{elt.email}</td><td><button onClick={()=>deleteByID(elt.id)}>Supprimer</button></td><td><button><Link to="/personne/2">Détails</Link></button></td></tr>
            ))
            }           
        </tbody>
    </table>
    </div>
}