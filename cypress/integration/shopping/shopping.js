import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import goodChoiceModal from "../../pom/modals/goodChoiceModal";
import basket from "../../pom/pages/basket";
import home from "../../pom/pages/home";
import search from "../../pom/pages/search";
import wishlist from "../../pom/pages/wishlist";

Given("User searchs for an {string}", (article) => {
    home.searchTextBox().type(article+"{enter}");
});

When("User clicks the Add to Wishlist heart icon in the tile {string}", (number) => {
    search.addToWishlistButton(number).click();
    search.addToWishlistButtonPressed(number).should("exist");
});

And("User clicks the Wunschliste button", () => {
    home.wishlistButton().click();
});

Then("In the Wishlist the User watches for the tile {string} to check if the article was added", (number) => {
    wishlist.articleTile(number).should("be.visible");
});

When("User enters the zip code {string}", (zipCode) => {
    wishlist.zipCodeTextBox().type(zipCode);
});

And("User clicks the Alle Artikel In Den Warenkorb button", () => {
    wishlist.addAllToBasketButton().click({ force: true });
    goodChoiceModal.overlay().should("be.visible");
});

Then("User clicks the Zum Warenkorb button", () => {
    goodChoiceModal.goToBasketButton().click();
});

And("In the Basket the User watches for the tile number to check if the article was added", (datatable) => {
    datatable.hashes().forEach((element) => {
        basket.articleTile(element.number).should("be.visible");
    });
});

Given("User clicks the Warenkorb button", () => {
    home.basketButton().click();
});

Then("User sums the article prices and compares the price with the total price excluding shipping", () => {
    let sum = 0;
    let total = 0;
    
    basket.fractionArticlePrices().each(($fraction) => {
        sum = sum + (+($fraction.text())/100);
    })

    basket.integerArticlePrices().each(($int) => {
        sum = sum + +($int.text());
    })

    basket.fractionTotalArticlesPrices().its('text').then((fractionTotal) => {
        total = (+fractionTotal) / 100;
    })

    basket.integerTotalArticlesPrices().its('text').then((integerTotal) => {
        total = total + (+integerTotal);       
    })

    expect(total).to.equal(sum); 
});

