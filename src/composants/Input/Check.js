export default function Check({checked,label,handleCheck}){
  return<div>
    <form>
        <input type="checkbox"  value={checked} onChange={handleCheck}></input>
        <label>{label}</label>
    </form>
  </div>
}