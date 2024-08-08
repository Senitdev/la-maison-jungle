
import { useState } from "react";
import Check from "../Input/Check";
import InputSearch from "../Input/InputSearch";
import ProductList from "../Product/ProductList";
export default function Blog(){
    const labelle="Veuillez cocher que les produits en Stock";
    const placeholder="Rechercher Produits";
    let [motCle , updateMotcle]=useState("");
    function handleSearch(e){
        motCle=e.target.value;
        updateMotcle(motCle);
    }
    return<div>
        <InputSearch placeholder={placeholder} handleClic={handleSearch}/>
        <Check label={labelle}/>
        <ProductList motCle={motCle} langue="Francais"/>
    </div>
}