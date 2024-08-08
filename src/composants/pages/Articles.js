import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Articles(){
   const{id}=useParams();
   const[person,updatePersone]=useState([]);
   let url="http://localhost:9096/api/v2/personne/"+{id}
     axios.get(url).then((resp)=>{
       updatePersone(resp.data);
     })
       return<div>
        je suis l'article  N° :{id}
        <ul>
            <li>Prénom : {person.prenom}</li>
            <li>Nom : {person.nom}</li>
            <li>Adresse : {person.adresse}</li>
        </ul>
    </div>
}