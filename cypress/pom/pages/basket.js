class basket{

    //Article Tile
    articleTile = (number) => cy.get(`[data-article-number='${number}']`);

}

module.exports = new basket();