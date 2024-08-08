import { useState } from "react";

export default function CheckBox(){
    const[checked,updateCheck]=useState(false);
function form({checked}){
    return<div>
        <form>
        <label>Prenom</label>
        <input type="text" name="prenom"></input>
        <input type="checkbox" value={checked}></input>
        </form>
    </div>
}
}