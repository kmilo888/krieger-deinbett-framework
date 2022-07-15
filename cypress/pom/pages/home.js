class home{

    //Search text box
    searchTextBox = () => cy.get("#searchFieldInputId");

    //Profile button
    profileButton = () => cy.get(".headerElement__link.headerElement__link--login");

    //Wishlist button
    wishlistButton = () => cy.get(".headerElement__link.headerElement__link--wishlist");

    //Wishlist button
    basketButton = () => cy.get(".headerElement__link.headerElement__link--cart");

    //Hidden span with user full name
    fullnameHiddenSpan = () => cy.get(".headerElement__status.headerElement__status--login");
}

module.exports = new home();