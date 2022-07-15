class wishlist{

    //Article Tile
    articleTile = (number) => cy.get(`[data-wishlist-entry-id="${number}"]`);

    //Add all articles to basket button
    addAllToBasketButton = () => cy.get('#addAddToWishlist');

}

module.exports = new wishlist();