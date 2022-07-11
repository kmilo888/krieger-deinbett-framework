import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I visit DeinBett.de", () => {
    cy.visit("/");
});