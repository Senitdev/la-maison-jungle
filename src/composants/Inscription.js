export default Formulaire
function Formulaire(){
    return<form>
        <h2>Formulaire de connexion</h2>
        <label>Login</label>
        <input type="text" name="login"></input>
        <label>Password</label>
        <input type="password" name="pass"></input>
        <button>Valider</button>
    </form>
}