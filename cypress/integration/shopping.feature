Feature: Shopping

    Background:
        Given User visits DeinBett.de
        And User clicks the Alle auswahlen bestatigen button, if cookie modal shows up
        And User clicks the Anmelden button in the nav
        And User types the email in the login form
        And User types the "new" password in the login form
        And User clicks the Anmelden button in the login form
        And System logs in and verifies user fullname

    Scenario Outline: Add items to the Wishlist
        Given User searchs for an "<article>"
        When User clicks the Add to Wishlist heart icon in the tile "<number>"
        And User clicks the Wunschliste button
        Then In the Wishlist the User watches for the tile "<number>" to check if the article was added
        And User logs off the System

        Examples:
            | number    | article                                                   |
            | 11134356  | Drehtürenschrank Havant                                   |
            | 11133268  | Kleiderschrank-Aufsatz Malta                              |
            | 10138817  | Drehtürenschrank, 3-türig Laurito                         |
            | 11130048  | Drehtürenschrank Bradford                                 |
            | 10140280  | Lattenrost mit Kopf- und Fußverstellung Dormaflex 210 KF  |

    Scenario: Add items from the Wishlist to the basket
        Given User clicks the Wunschliste button
        When User enters the zip code "10117"
        And User clicks the Alle Artikel In Den Warenkorb button
        Then User clicks the Zum Warenkorb button
        And In the Basket the User watches for the tile number to check if the article was added 
            | number    |
            | 11134356  |
            | 11133268  |
            | 10138817  |
            | 11130048  |
            | 10140280  |
        And User logs off the System

    Scenario: Go to basket and verify the merchandise values
        Given User clicks the Wunschliste button
        And User enters the zip code "10117"
        And User clicks the Alle Artikel In Den Warenkorb button
        And User clicks the Zum Warenkorb button
        When User clicks the Warenkorb button
        Then User sums the article prices and compares the price with the total price excluding shipping 
        And User logs off the System