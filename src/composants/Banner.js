import logo from "../assets/logo.png";
import '../styles/Banner.css';
export default Banner
    function Banner(){
     return <div className="headBaner">
         <img src={logo}  alt="logo la maison du jungle" className="logoBaner"></img>
        <h1>La maison du Jungle</h1>
     </div>
    }
