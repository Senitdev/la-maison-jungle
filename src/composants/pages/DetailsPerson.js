import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailsPerson(){

const[Person,updatePerson]=useState([]);
let {id}=useParams();
  useEffect(()=>{
    axios.get("http://localhost:9096/api/v2/personne/154").then((resp)=>{
        updatePerson(resp.data);
       });
},
[]);
return<div>
    Details personne n°: {id}
    <ul>
        <li>Prenom : {Person.prenom}</li>
    </ul>
</div>

}