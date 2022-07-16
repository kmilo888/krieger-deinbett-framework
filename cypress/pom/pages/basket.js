class basket{

    //Article Tile
    articleTile = (number) => cy.get(`[data-article-number='${number}']`);
    
    //Integer Article Prices
    integerArticlePrices = () => cy.xpath("//div[@class='cartEntry__newPrice' or @class='cartEntry__price']//div[@class='articlePrice__integer']");

    //Fraction Article Prices
    fractionArticlePrices = () => cy.xpath("//div[@class='cartEntry__newPrice' or @class='cartEntry__price']//div[@class='articlePrice__fraction articlePrice__fraction--']");

    //Total Integer Articles Prices
    integerTotalArticlesPrices = () => cy.xpath("//div[text()='Warenwert']/following-sibling::div[@class='summaryBox__value']//div[@class='articlePrice__integer']");

    //Total Fraction Articles Prices
    fractionTotalArticlesPrices = () => cy.xpath("//div[text()='Warenwert']/following-sibling::div[@class='summaryBox__value']//div[@class='articlePrice__fraction articlePrice__fraction--']");

}

module.exports = new basket();