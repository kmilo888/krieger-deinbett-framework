Feature: Registration

    Background:
        Given User visits DeinBett.de
        And User clicks the Alle auswahlen bestatigen button, if cookie modal shows up

    # Create a user account with random generated data and use the registration function to register an account for this user
    Scenario: Create a user account
        Given User clicks the Anmelden button
        When User clicks the Weiter zur registrierung button
    #    Then outcome

