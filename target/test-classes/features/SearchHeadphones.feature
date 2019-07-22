@Search-headphones
Feature: Acceptance testing to validate Search-headphone page is working fine
  Inorder to validate that
  the search headphone page is working fine on ebay
  we will do the acceptance testing

  @Registration-Positive
  Scenario: Validate the registration
    Given I'm on the homepage "https://www.ebay.com.au/" of ebay website
    When I click on the "register" link
    And type your "First Name",
    And write your "Last Name",
    And give your "Email",
    And quote your "Password",
    And I click on "Register",
    And move to "logout" menu,
    Then I will "logout"

  @SignInandSearch-Positive
  Scenario: Validate searching of headphones after login	
    Given I'm on the home page "https://www.ebay.com.au/" of ebay website
    When I click on the "Sign in" for Sign in link
    And type the "Email" for inputting email address,
    And quote your "Password" for password,
    And I'll click on "Sign In" for second time signing,
    Then I go to the "Search for anything" bar,
    And I'll type "Bose headphones" for headphones,
    Then I'll click on "Search" for searching the headphone,
    And I will click on the "first Bose Headphone" to get the first Bose Headphone,
    Then I'll "Add to cart" for adding the item to the cart.
