class login {

    //New account button
    newAccountButton = () => cy.get("#registerAccount");

    //Login email text box
    loginEmailTextBox = () => cy.get("#loginEmail");
    
    //Login email text box
    loginPasswordTextBox = () => cy.get("#loginPassword");
    
    //Error label validator
    errorValidatorLabel = () => cy.get("#loginEmail-error");

    //Forgot password link
    forgotPasswordLink = () => cy.get(".existingAccount__forgotten");

    //Login button
    loginButton = () => cy.get("#login-submit");

}

module.exports = new login();