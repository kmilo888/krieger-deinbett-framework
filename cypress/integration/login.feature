Feature: Login

    Background:
        Given User visits DeinBett.de
        And User clicks the Alle auswahlen bestatigen button, if cookie modal shows up

    Scenario: Login Success
        Given User clicks the Anmelden button in the nav
        When User types the email in the login form
        And User types the "new" password in the login form
        And User clicks the Anmelden button in the login form
        Then System logs in and verifies user fullname
        And User logs off the System

    Scenario: Login Failure
        Given User clicks the Anmelden button in the nav
        When User types the email in the login form
        And User types the "old" password in the login form
        And User clicks the Anmelden button in the login form
        Then System displays a wrong password error