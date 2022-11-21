@hovers
Feature: Hovers

    Scenario Outline: Check hovers
        
        Given I am on the "hovers" page
        When I move to the <number> icon
        Then I should see the <number> user profile with name <name>

    Examples:
      | number | name  |
      | 1      | user1 |
      | 2      | user2 |
      | 3      | user3 |
