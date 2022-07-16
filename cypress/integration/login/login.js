import { Then } from "cypress-cucumber-preprocessor/steps";
import login from "../../pom/pages/login";

Then("System displays a wrong password error", () => {
    login.errorValidatorLabel().should('be.visible');
});