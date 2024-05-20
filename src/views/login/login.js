function viewLogin() {
  return `
    <div class="main">  	
        <input type="checkbox" id="chk" aria-hidden="true">
    
        <div class="signup">
            <form id="signupForm">
                <label for="signupName" aria-hidden="true">Inscription</label>
                <input type="text" id="signupName" name="name" placeholder="Nom d'utilisateur" required="">
                <input type="email" id="signupEmail" name="mail" placeholder="Email" required="">
                <input type="password" id="signupPassword" name="password" placeholder="Mot de passe" required="">
                <button type="submit">S'inscrire</button>
                <p id="signupError" style="color: red; display: none;"></p>
            </form>
        </div>
    
        <div class="login">
            <form id="loginForm">
                <label for="loginEmail" aria-hidden="true">Connexion</label>
                <input type="email" id="loginEmail" name="mail" placeholder="Email" required="">
                <input type="password" id="loginPassword" name="password" placeholder="Mot de passe" required="">
                <button type="submit">Se connecter</button>
            </form>
        </div>
    </div>
  `;
}

export default viewLogin;
