
export default function MyButton({count,onClick}){
return<div>
    <button onClick={onClick}>
       Compter
    </button>
    <label>mon compteur actuelle{count}</label> 
</div>
}