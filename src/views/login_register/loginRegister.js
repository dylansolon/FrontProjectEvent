function viewLogin() {
  return `
  <section>
  <div class="box-container">  	
    <input type="checkbox" id="toggle" aria-hidden="true">
    <div class="register-section">
      <form id="signupForm">
        <label for="toggle" class="register-label" aria-hidden="true">Sign up</label>
        <input type="text" class="register-input" name="name" placeholder="User name" required>
        <input type="email" class="register-input" name="mail" placeholder="Email" required>
        <input type="password" class="register-input" name="password" placeholder="Password" required>
        <button type="submit" id="register" class="register-button">Sign up</button>
      </form>
    </div>
    <div class="login-section">
      <form id="loginForm">
        <label for="toggle" class="login-label" aria-hidden="true">Login</label>
        <input type="email" class="login-input" name="mail" placeholder="Email" required>
        <input type="password" class="login-input" name="password" placeholder="Password" required>
        <button type="submit" id="login" class="login-button">Login</button>
      </form>
    </div>
  </div>
  </section>
  <div id="signupError"></div>
  <div id="signupErrorLogin"></div>
  `;
}

export default viewLogin;
