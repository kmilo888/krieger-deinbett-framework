import { Given, And } from "cypress-cucumber-preprocessor/steps";
import cookiesModal from "../../pom/modals/cookiesModal";
import profile from "../../pom/pages/profile";
import home from "../../pom/pages/home";

Given("User visits DeinBett.de", () => {
    cy.visit("/");
});

And("User clicks the Alle auswahlen bestatigen button, if cookie modal shows up", () => {
    cookiesModal.optOutAcceptedCookie().then((val) => {
        //if the cookie does not have a value, the user has not accepted the 
        if(!val) {
            cookiesModal.acceptAllButton().click();
        }
    });
});

Given("User clicks the Anmelden button in the nav", () => {
    home.profileButton().click();
});

Then("System logs in and verifies user fullname", () => {
    cy.fixture("random-user").then(function (user) {
        home.fullnameHiddenSpan().contains(`${user.firstName} ${user.lastName}`);
    });
});

And("User logs off the System", () => {
    home.profileButton().click();
    profile.logOutButton().click();
});

