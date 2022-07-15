class search{

    //Add to Wishlist Button
    addToWishlistButton = (number) => cy.get(`[data-wish-list-entry-number="${number}"]`);

}

module.exports = new search();