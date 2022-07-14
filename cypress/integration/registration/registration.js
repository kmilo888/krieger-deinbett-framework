import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { recurse } from 'cypress-recurse'
import profile from "../../pom/pages/profile";

//Variable definitions
const cookiesModal = require('../../pom/modals/cookiesModal');
const home = require('../../pom/pages/home');
const login = require('../../pom/pages/login');
const register = require('../../pom/pages/register');
const forgottenPassword = require('../../pom/pages/forgottenPassword');
//const ms = require('smtp-tester');


Given("User visits DeinBett.de", () => {
    cy.visit("/");
});

And("User clicks the Alle auswahlen bestatigen button, if cookie modal shows up", () => {
    cookiesModal.optOutAcceptedCookie().then((val) => {
        //if the cookie does not have a value, the user has not accepted the 
        if(!val) {
            cookiesModal.acceptAllButton().click();
        }
    });
});

Given("Test framework creates a random user", () => {
    cy.generateRandomUser();
});

And("User clicks the Anmelden button", () => {
    home.profileButton().click();
});

When("User clicks the Weiter zur registrierung button", () => {
    login.newAccountButton().click();
});

And("User fills the Neu registrieren form", () => {
    cy.fixture('random-user').then(function (user) {
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

Then("System creates, logs in and verifies user fullname", () => {
    cy.fixture('random-user').then(function (user) {
        home.fullnameHiddenSpan().contains(`${user.firstName} ${user.lastName}`);
    });
});

And("User logs off the System", () => {
    home.profileButton().click();
    profile.logOutButton().click();
});

When("User clicks the Passwort vergessen link", () => {
    login.forgotPasswordLink().click();
});

And("User types their email", () => {
    cy.fixture('random-user').then(function (user) {
        forgottenPassword.emailTextBox().type(user.email);
    });
});

And("User clicks the Absenden button", () => {
    cy.intercept('POST', '/api/requestPassword').as('register');
    forgottenPassword.submitButton().click();
    cy.location('pathname').should('equal', '/passwortMail/gesendet');
});

//And("User recieves an email", () => {
//    cy.fixture('random-user').then(function (user) {
//
//        //cy.wait('@register').its('request.body').should('deep.equal', {
//        //    customerEmail: user.email
//        //});
//
//        cy.wait('@register').its('response.body');
//
//        // call the task every second for up to 20 seconds
//        // until it returns a string result
//        recurse(
//            () => cy.task('getLastEmail', user.email),
//            Cypress._.isString,
//            {
//              log: false,
//              delay: 60000,
//              timeout: 600000,
//            },
//        ).then(email => cy.log(email));
//    });
//});

