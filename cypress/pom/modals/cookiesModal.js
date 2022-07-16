class cookiesModal {

    //Get optOutAccepted cookie to check if it shows the Cookies modal
    optOutAcceptedCookie = () => cy.getCookie('optOutAccepted');
    
    //Accept all button selector
    acceptAllButton = () => cy.xpath("//div[@class='consentForm__acceptButton']//button[@class='button']");

}

module.exports = new cookiesModal();