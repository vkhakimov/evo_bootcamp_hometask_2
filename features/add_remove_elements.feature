@add_remove_elements
Feature: Add and remove elements

    Scenario: Add element
        
        Given I am on the "add_remove_elements/" page
        When I click on the Add element button
        Then I should see Delete button with text Delete

    Scenario: Delete element
        
        Given I am on the "add_remove_elements/" page
        When I click on the Add element button
        And I click on the Delete button
        Then I should not see Delete button

    Scenario: Add two elements
        
        Given I am on the "add_remove_elements/" page
        When I click on the Add element button
        And I click on the Add element button
        Then I should see two Delete buttons with text Delete