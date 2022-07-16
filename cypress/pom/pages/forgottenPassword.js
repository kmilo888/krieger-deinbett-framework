class forgottenPassword {

    //Email text box
    emailTextBox = () => cy.get("#passwordForgottenEmail");

    //Forgot password link
    submitButton = () => cy.get("#passwordForgottenSubmitId");
}

module.exports = new forgottenPassword();