class search{

    //Add to Wishlist Button
    addToWishlistButton = (number) => cy.get(`[data-wish-list-entry-number="${number}"]`);

    //Add to Wishlist Button. Timeout added for waiting after pressed
    addToWishlistButtonPressed = (number) => cy.xpath(`//div[@data-wish-list-entry-number="${number}" and @class="wishlistIcon wishlistIcon--filled wishlistIcon--pointer"]`, { timeout: 10000 });
}

module.exports = new search();