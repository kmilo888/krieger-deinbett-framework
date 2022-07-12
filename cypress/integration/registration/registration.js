import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
const cookiesModal = require('../../pom/modals/cookiesModal');
const home = require('../../pom/pages/home');
const login = require('../../pom/pages/login');

Given("User visits DeinBett.de", () => {
    cy.visit("/");
});

And("User clicks the Alle auswahlen bestatigen button, if shown", () => {
    cookiesModal.optOutAcceptedCookie().then((val) => {
        //if the cookie does not have a value, the user has not accepted the 
        if(!val) {
            cookiesModal.acceptAllButton().click();
        }
    });
});

When("User clicks the Anmelden button", () => {
    home.loginButton().click();
});

When("User clicks the Weiter zur registrierung button", () => {
    login.newAccountButton().click();
});