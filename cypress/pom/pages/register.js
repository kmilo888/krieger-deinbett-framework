class register {

    //Form Elements
    salutationDropdown = () => cy.get("#salutation");
    firstNameTextBox = () => cy.get("#firstName");
    lastNameTextBox = () => cy.get("#lastName");
    emailTextBox = () => cy.get(".formInput__inputContainer.formInput__inputContainer--text #email");
    passwordTextBox = () => cy.get("#password");
    confirmPasswordTextBox = () => cy.get("#password2");
    dataProtectionCheckBox = () => cy.get(".accountNew__agbCheckbox .checkbox__checkbox.checkbox__checkbox--alignTop");

    //Register Button
    registerButton = () => cy.get('#register-submit');
}

module.exports = new register();