// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('generateRandomUser', () => {
    const faker = require('@faker-js/faker').faker;

    const gender = faker.name.gender(true);
    const firstName = faker.name.firstName(gender);
    const lastName = faker.name.firstName(gender);

    cy.writeFile('cypress/fixtures/random-user.json', {
        salutation: gender.toLowerCase(),
        firstName: firstName,
        lastName: lastName,
        email: faker.internet.email(firstName, lastName, 'acme.com'),
        password: faker.internet.password(20, true, /[A-Z]/, 'xL$7')
    })
    
})