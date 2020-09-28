Feature: Google
 
  I want to search something on Google
 
  Scenario: Search something Google
    Given I open Google page
    Then I see "Google" in the title
    Then I type "example" in the search input
    Then I submit the search
    Then I see multiple search results
