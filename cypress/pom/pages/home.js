class home{

    //Profile button
    profileButton = () => cy.get(".headerElement__link.headerElement__link--login");

    //Hidden span with user full name
    fullnameHiddenSpan = () => cy.get(".headerElement__status.headerElement__status--login");
}

module.exports = new home();