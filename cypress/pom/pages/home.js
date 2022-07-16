class home {

    //Search text box
    searchTextBox = () => {
        cy.scrollTo(0, 500);
        cy.scrollTo(0, -500);
        return cy.get("#searchFieldInputId");
    }

    //Profile button
    profileButton = () => {
        cy.scrollTo(0, 500);
        cy.scrollTo(0, -500);
        return cy.get(".headerElement__link.headerElement__link--login");
    }
    //Wishlist button
    //wishlistButton = () => cy.get(".headerElement__link.headerElement__link--wishlist").then(button => {
    //    if(!button.is(":visible")){
    //        cy.scrollTo(0, -500);    
    //    }
    //})

    //Wishlist button
    wishlistButton = () => {
        cy.scrollTo(0, 500);
        cy.scrollTo(0, -500);
        return cy.get(".headerElement__link.headerElement__link--wishlist");
    }

    //Wishlist button
    basketButton = () => {
        cy.scrollTo(0, 500);
        cy.scrollTo(0, -500);
        return cy.get(".headerElement__link.headerElement__link--cart");
    }

    //Hidden span with user full name
    fullnameHiddenSpan = () => cy.get(".headerElement__status.headerElement__status--login");
}

module.exports = new home();