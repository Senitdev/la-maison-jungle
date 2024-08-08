import TableProduct from "./TableProduct";
export default function ProductList({motCle,langue}){
    const liste=[
        {
            category:"Fruits",price:"$1",stocked:"true",name:"Apple"
        },
        {
            category:"Fruits",price:"$2",stocked:"true",name:"Techno"
        },
        {
            category:"Fruits",price:"$3",stocked:"false",name:"Samsung"
        },
        {
            category:"Vegetable",price:"$4",stocked:"true",name:"Mangue"
        },
        {
            category:"Vegetable",price:"$5",stocked:"false",name:"Poivre"
        },
        {
            category:"Vegetable",price:"$6",stocked:"false",name:"Comcombre"
        }
    ]
    const listeAnglais=[
        {
            category:"Fruits",price:"$1",stocked:"true",name:"AppleANGLAIS"
        },
        {
            category:"Fruits",price:"$2",stocked:"true",name:"TechnoANGLAIS"
        },
        {
            category:"Fruits",price:"$3",stocked:"false",name:"SamsungAnglais"
        },
        {
            category:"Vegetable",price:"$4",stocked:"true",name:"MangueAnglais"
        },
        {
            category:"Vegetable",price:"$5",stocked:"false",name:"PoivreAnglais"
        },
        {
            category:"Vegetable",price:"$6",stocked:"false",name:"ComcombreAnglais"
        }
    ]
    const ProductFitre=[];
   
    if(langue==='Francais'){
    liste.forEach((elt)=>{
   if(elt.name.includes(motCle)){
    ProductFitre.push({name:elt.name,price:elt.price,stocked:elt.stocked});
   }
    }
    );
}
else{
    listeAnglais.forEach((elt)=>{
        if(elt.name.includes(motCle)){
         ProductFitre.push({name:elt.name,price:elt.price,stocked:elt.stocked});
        }
         }
         );
}
    return<div>
        <TableProduct liste={ProductFitre}/>
    </div>
    }