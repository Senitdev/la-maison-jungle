import "../styles/Cart.css";
function Cart(){
    const  pomme=8;
     const banane=10;
     const fleur=15;
    return<div className="lmj-cart">
        <ul>
            <li>
                Pomme : {pomme} CFA
            </li>
            <li>Bannane  :  {banane} CFA</li>
            <li>Pot de fleur : {fleur} CFA</li>
        </ul>
        Total : { pomme+banane+fleur}
    </div>
}
export default Cart