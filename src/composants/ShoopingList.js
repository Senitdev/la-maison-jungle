function ShoopingList(){
    const plantList=[
        'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
    ]
return<ul>
    {plantList.map((plant,index)=>(
  <li key={`${plant}-${index}`}>{plant}</li>
    ))}
</ul>
}
export default ShoopingList