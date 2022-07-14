Feature: Registration

    Background:
        Given User visits DeinBett.de
        And User clicks the Alle auswahlen bestatigen button, if cookie modal shows up

    # Create a user account with random generated data and use the registration function to register an account for this user
    Scenario: Create a user account
        Given Test framework creates a random user
        And User clicks the Anmelden button in the nav
        When User clicks the Weiter zur registrierung button
        And User fills the Neu registrieren form
        And User clicks the Weiter button
        Then System logs in and verifies user fullname
        And User logs off the System

    Scenario: Request forgotten password
        Given User clicks the Anmelden button in the nav
        When User clicks the Passwort vergessen link
        And User types their email
        And User clicks the Absenden button
        #And User recieves an email