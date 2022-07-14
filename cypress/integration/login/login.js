import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import login from "../../pom/pages/login";

When("User types the email in the login form", () => {
    cy.fixture("random-user").then(function (user) {
        login.loginEmailTextBox().type(user.email);
    });
});

And("User types the {string} password in the login form", (password) => {
    cy.fixture("random-user").then(function (user) {
        switch (password){
            case "old":
                login.loginPasswordTextBox().type(user.oldPassword);
                break;
            case "new":
                login.loginPasswordTextBox().type(user.password);
                break;
        }
    });
});

And("User clicks the Anmelden button in the login form", () => {
    login.loginButton().click();
});

Then("System displays a wrong password error", () => {
    login.errorValidatorLabel().should('be.visible');
});