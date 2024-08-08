
import { Link } from 'react-router-dom';
import './Layout.css';
export default function Lajout(){
return<div>
<ul>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/liste">Contact liste</Link></li>
    <li><Link to="/personne">ListePersonne</Link></li>
</ul>
</div>
}