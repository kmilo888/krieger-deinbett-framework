class home{

    //Log out button
    logOutButton = () => cy.xpath("//a[@class='sidebarNavigation__rootChild' and text()='Abmelden']");

}

module.exports = new home();