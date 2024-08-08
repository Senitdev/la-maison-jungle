import { useState } from "react";

export default function Produits(){
    const [ListProduits,updateProduit]=useState([
    {
        category:"Fruits",price:"$1",stocked:true,name:"Apple"
    },
    {
        category:"Fruits",price:"$2",stocked:true,name:"Techno"
    },
    {
        category:"Fruits",price:"$3",stocked:false,name:"Samsung"
    },
    {
        category:"Vegetable",price:"$4",stocked:true,name:"Mangue"
    },
    {
        category:"Vegetable",price:"$5",stocked:false,name:"Poivre"
    },
    {
        category:"Vegetable",price:"$6",stocked:false,name:"Comcombre"
    }
])
function Result(){
    return<div>
        <table>
            <thead>
                <th>Name</th>
                <th>Price</th>
            </thead>
      <tbody>
        {
      ListProduits.map((elt)=>(
        <tr key={elt.price}><td >{elt.name}</td><td>{elt.price}</td></tr>
      ))
    }
        
      </tbody>
        </table>
    </div>
}
const[motCle,updateMotCle]=useState("Apple");
const handleSearch=(e)=>{
    updateMotCle(e.target.value);
    const mesProduits=[...ListProduits];
    const copyProduits=[...ListProduits];
    if(e.target.value!=""){
        const Produit=mesProduits.filter((produits)=>produits.name.includes(motCle));
        updateProduit(Produit);
    }else{
        updateProduit(copyProduits);
    }
}
return<div>
  <SearchBar/><Result/>
</div>
function SearchBar(){
    return<div>
    <form>
        <input type="text" name="motCle"  value={motCle} placeholder="Rechercher" onChange={handleSearch}></input>
        <br></br>
        <input type="checkbox" name="choix"></input><label>N'afficher que les produits en stock</label>
    </form>
    </div>
    }
}
