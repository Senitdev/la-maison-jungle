import { useState } from "react";

function PersoneList(){
    const [person,updatePerson]=useState([
        {
            id:1,
            prenom:"Pape",
            nom:"Toure",
            age:25
            
        },
        {
            id:2,
            prenom:"Sadikh",
            nom:"Diop",
            age:30,
            majeur:true,
        },
        {
            id:3,
            prenom:"Omar",
            nom:"Ndiaye",
            age:60,
            majeur:true,
        },
        {
            id:5,
            prenom:"Seynabou",
            nom:"Diop",
            age:15,
            majeur:false,
        }
    ]);
//const[personne,updatePerson]=useState(person);    
 function handleClic(id){
    const personCopy=[...person]
   const copyPersonneUpdated= personCopy.filter((person)=>person.id!==id);
     updatePerson(copyPersonneUpdated);
    }
    function handleSubmit(e){
        e.preventDefault();
        let input_nom=e.target['nom'].value;
        let input_prenom=e.target['prenom'].value;
        let input_age=e.target['age'].value;
        let id=new Date().getSeconds();
       const copyPersonne=[...person];
       copyPersonne.push({id:id,prenom:input_prenom,nom:input_nom,age:input_age});
        updatePerson(copyPersonne);
    }
    return<div>
    <ul>
        {
            person.map((elt)=>(
                <li key={elt.id}>{elt.id} {elt.prenom} {elt.nom} {elt.age} <button onClick={()=>handleClic(elt.id)}>Supprimer</button></li>
            ))
        }
    </ul>
    <div>
        <form onSubmit={handleSubmit}>
        <label>Prenom</label>
        <input type="text" name="prenom"></input><br></br>
        <label>Nom</label>
        <input type="text" name="nom"></input><br></br>
        <label>Age</label>
        <input type="number" name="age"></input><br></br>
        <button>Ajouter</button>
        </form>
    </div>
    </div>
    
}
export default PersoneList