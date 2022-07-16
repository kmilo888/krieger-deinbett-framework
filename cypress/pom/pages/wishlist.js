class wishlist{

    //Zip code text box
    zipCodeTextBox = () => cy.get(".wishlist__postalCodeArea #zipcode-logistic-input");

    //Article Tile
    articleTile = (number) => cy.get(`[data-wishlist-entry-id="${number}"]`, { timeout: 10000 });

    //Add all articles to basket button
    addAllToBasketButton = () => cy.get("#addAddToWishlist").scrollIntoView({ duration: 2000 });

}

module.exports = new wishlist();