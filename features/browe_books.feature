Feature: Example feature
  As an anonymous user
  I want to browse for books when I am in homepage. Books are organized in categories. One category might have multiple books. One book might belong to different categories.

  Scenario: Browsing books
    Given There're some existing books in the system
    When I go to home page
    Then I should see "BookStore NodeJS" as the title page
    Then I should see all books are listed on the home page
