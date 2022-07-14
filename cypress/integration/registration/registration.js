import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import login from "../../pom/pages/login";
import register from "../../pom/pages/register";
import forgottenPassword from "../../pom/pages/forgottenPassword";

Given("Test framework creates a random user", () => {
    cy.generateRandomUser();
});

When("User clicks the Weiter zur registrierung button", () => {
    login.newAccountButton().click();
});

And("User fills the Neu registrieren form", () => {
    cy.fixture("random-user").then(function (user) {
        register.salutationDropdown().select(user.salutation);
        register.firstNameTextBox().type(user.firstName);
        register.lastNameTextBox().type(user.lastName);
        register.emailTextBox().type(user.email);
        register.passwordTextBox().type(user.password);
        register.confirmPasswordTextBox().type(user.password);
        register.dataProtectionCheckBox().click();
    });
});

And("User clicks the Weiter button", () => {
    register.registerButton().click();
});

When("User clicks the Passwort vergessen link", () => {
    login.forgotPasswordLink().click();
});

And("User types their email", () => {
    cy.fixture("random-user").then(function (user) {
        forgottenPassword.emailTextBox().type(user.email);
    });
});

And("User clicks the Absenden button", () => {
    forgottenPassword.submitButton().click();
    cy.location('pathname').should('equal', '/passwortMail/gesendet');
});