export default function TableProduct({liste}){
return<div>
    <table>
    <thead>
    <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Stock</th>
    </tr>
    </thead>
    <tbody>
        {
  liste.map((produits)=>(
    <tr key={produits.name}><td >{produits.name}</td><td>{produits.price}</td><td>{produits.stocked}</td></tr>
  ))}
    </tbody>
    </table>
    </div>   
}