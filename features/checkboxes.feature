@checkboxes
Feature: Сheckboxes

    Scenario Outline: Check/Uncheck the checkbox
        
        Given I am on the "checkboxes" page
        When I click on the checkbox <number>
        Then I should see checkbox <number> checked
    
    Examples:
      | number |
      | 1      |
