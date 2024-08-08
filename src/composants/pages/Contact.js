import axios from 'axios';
export default function Contact(){
 function   handleClic(e){
        e.preventDefault();
        let prenom=e.target["prenom"].value;
     let nom=e.target["nom"].value;
     let adresse=e.target["adresse"].value;
     let telephone=e.target["telephone"].value;
     let email=e.target["email"].value;
        let form={"prenom":prenom,"nom":nom,"adresse":adresse,"telephone":telephone,"email":email};
      axios.post("http://localhost:9096/api/v2/personne",form).then(res=>{
       if(res.status===200){
        alert("Ajouter avec succés");
        nom="";
       }
      })        
    }
    return<div>
        je suis la page contact
        <form onSubmit={handleClic}>
            <label>Prenom</label>
            <input type="text" name="prenom"></input>
            <label>Nom</label>
            <input type="text" name="nom"></input>
            <label>Adresse</label>
            <input type="text" name="adresse"></input>
            <label>Telephone</label>
            <input type="text" name="telephone"></input>
            <label>Email</label>
            <input type="text" name="email"></input>
            <button>Envoyer</button>
        </form>
    </div>
}