class login{

    //New account button
    newAccountButton = () => cy.get("#registerAccount");

    //Forgot password link
    forgotPasswordLink = () => cy.get(".existingAccount__forgotten");
}

module.exports = new login();