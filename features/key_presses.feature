@key_presses
Feature: Keypresses

    Scenario Outline: Check keypresses
        
        Given I am on the "key_presses" page
        When I press on the <button> button
        Then I should see a message saying <message>

    Examples:
      | button | message                |
      | A      | You entered: A         |
      | B      | You entered: B         |
