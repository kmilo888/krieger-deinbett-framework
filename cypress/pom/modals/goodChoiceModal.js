class goodChoiceModal {

    //Good choice modal overlay
    overlay = () => cy.get("#overlayRight");

    //Accept all button selector
    goToBasketButton = () => cy.xpath("//div[@class='overlay__content overlay__content--right overlay__content--activeRight']//a[@class='addToCartOverlay__footerToCart']");

}

module.exports = new goodChoiceModal();