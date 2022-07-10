import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit DeinBett.de", () => {
    cy.visit("/");
});