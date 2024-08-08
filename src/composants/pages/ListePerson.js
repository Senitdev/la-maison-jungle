import { useLoaderData } from "react-router-dom";

export default function ListePerson(){
   const person=useLoaderData();
    return<div>
        <table>
            <thead>
                <tr>
                    <th>Prenom</th>
                    <th>Nom</th>
                    <th>Adresse</th>
                    <th>Email</th>
                    <th>Telephone</th>
                </tr>
            </thead>
            <tbody>
                {
                person.map((elt)=>(
                    <tr key={elt.id}><td>{elt.prenom}</td><td>{elt.nom}</td><td>{elt.adresse}</td><td>{elt.email}</td><td>{elt.telephone}</td></tr>
                ))
                }
            </tbody>
        </table>
    </div>
}