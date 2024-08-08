export default function InputSearch({placeholder,handleClic}){
return<div>
    <form>
        <input type="text" name="prenom" placeholder={placeholder} onChange={handleClic}></input>
        
    </form>
</div>
}