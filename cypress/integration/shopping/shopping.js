import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import goodChoiceModal from "../../pom/modals/goodChoiceModal";
import home from "../../pom/pages/home";
import search from "../../pom/pages/search";
import wishlist from "../../pom/pages/wishlist";

Given("User searchs for an {string}", (article) => {
    home.searchTextBox().type(article+"{enter}");
});

When("User clicks the Add to Wishlist heart icon in the tile {string}", (number) => {
    search.addToWishlistButton(number).click();
});

And("User clicks the Wunschliste button", () => {
    home.wishlistButton().click();
});

Then("In the Wishlist the User watches for the tile {string} to check if the article was added", (number) => {
    wishlist.articleTile(number).should('be.visible');
});

When("User clicks the Alle Artikel In Den Warenkorb button", () => {
    wishlist.addAllToBasketButton().click();
});

Then("User clicks the Zum Warenkorb button", () => {
    goodChoiceModal.goToBasketButton().click();
});

And("In the Basket the User watches for the tile {string} to check if the article was added", (number) => {
    wishlist.articleTile(number).should('be.visible');
});

Given("User clicks the Warenkorb button", () => {
    home.basketButton().click();
});

When("User check each tile {string} of articles added and sums the price value ", (number) => {

});

Then("User verifies the total sum and the total shown matches", () => {

});
