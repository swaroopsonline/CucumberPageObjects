package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.actions.EbayHomePageActions;
import pages.actions.EbayRegistrationPageActions;
import pages.actions.EbaySignInPageActions;
import utils.SeleniumDriver;

public class EbayWebsiteSteps {

	EbayHomePageActions ebayHomePageActions = new EbayHomePageActions();
	EbayRegistrationPageActions ebayRegistrationPageActions = new EbayRegistrationPageActions();
	EbaySignInPageActions ebaySignInPageActions = new EbaySignInPageActions(); 

	@Given("^I'm on the homepage \"([^\"]*)\" of ebay website$")
	public void i_m_on_the_homepage_of_ebay_website(String websiteURL) throws Throwable {

		SeleniumDriver.openPage(websiteURL);

		// throw new PendingException();
	}

	@When("^I click on the \"([^\"]*)\" link$")
	public void i_click_on_the_link(String arg1) throws Throwable {
		ebayHomePageActions.clickOnRegisterLink();
		// throw new PendingException();
	}

	@And("^type your \"([^\"]*)\",$")
	public void type_your(String firstName) throws Throwable {

		ebayRegistrationPageActions.typeFirstName(firstName);

	}

	@When("^write your \"([^\"]*)\",$")
	public void write_your(String lastName) throws Throwable {

		ebayRegistrationPageActions.typeLastName(lastName);
		// throw new PendingException();
	}

	@When("^give your \"([^\"]*)\",$")
	public void give_your(String emailAddress) throws Throwable {
		ebayRegistrationPageActions.typeEmailAddress(emailAddress);
		// throw new PendingException();
	}

	@When("^quote your \"([^\"]*)\",$")
	public void quote_your(String password) throws Throwable {
		ebayRegistrationPageActions.typePassword(password);
		// throw new PendingException();
	}

	@When("^I click on \"([^\"]*)\",$")
	public void i_click_on(String arg1) throws Throwable {

		Thread.sleep(3000);
		ebayRegistrationPageActions.clickOnRegisterButton();
		// throw new PendingException();
	}

	@When("^move to \"([^\"]*)\" menu,$")
	public void move_to_menu(String arg1) throws Throwable {

		ebayRegistrationPageActions.moveToLogoutMenu();

	}

	@Then("^I will \"([^\"]*)\"$")
	public void i_will(String arg1) throws Throwable {

		ebayRegistrationPageActions.clickOnLogoutButton();
		// throw new PendingException();
	}

//*****************************************Sign In part to search for headphones******************//

	@Given("^I'm on the home page \"([^\"]*)\" of ebay website$")
	public void i_m_on_the_home_page_of_ebay_website(String websiteURL) throws Throwable {
		
		SeleniumDriver.openPage(websiteURL);
		
	}

	@When("^I click on the \"([^\"]*)\" for Sign in link$")
	public void i_click_on_the_for_Sign_in_link(String arg1) throws Throwable {
		
		ebayHomePageActions.clickOnSigninLink();
	}

	@When("^type the \"([^\"]*)\" for inputting email address,$")
	public void type_the_for_inputting_email_address(String emailAddress) throws Throwable {
		
		ebaySignInPageActions.typeEmailAddress(emailAddress);
	}

	@When("^quote your \"([^\"]*)\" for password,$")
	public void quote_your_for_password(String passWord) throws Throwable {
		
		ebaySignInPageActions.typePassword(passWord);
		
	}

	@When("^I'll click on \"([^\"]*)\" for second time signing,$")
	public void i_ll_click_on_for_second_time_signing(String signIn) throws Throwable {
		
		ebaySignInPageActions.signInToSubmit(signIn);
	}

	@Then("^I go to the \"([^\"]*)\" bar,$")
	public void i_go_to_the_bar(String searchBar) throws Throwable {
		
		ebaySignInPageActions.goToSearchBar(searchBar);
	}

	@Then("^I'll type \"([^\"]*)\" for headphones,$")
	public void i_ll_type_for_headphones(String boseHeadphone) throws Throwable {
		
		ebaySignInPageActions.typeBoseHeadphone(boseHeadphone);
	}

	@Then("^I'll click on \"([^\"]*)\" for searching the headphone,$")
	public void i_ll_click_on_for_searching_the_headphone(String searchButton) throws Throwable {
		
		ebaySignInPageActions.clickSearchButton(searchButton);
	}

	@Then("^I will click on the \"([^\"]*)\" to get the first Bose Headphone,$")
	public void i_will_click_on_the_to_get_the_first_Bose_Headphone(String firstBoseHeadphone) throws Throwable {
		
		ebaySignInPageActions.clickFirstBoseHeadphone(firstBoseHeadphone);
	}

	@Then("^I'll \"([^\"]*)\" for adding the item to the cart\\.$")
	public void i_ll_for_adding_the_item_to_the_cart(String addtocart) throws Throwable {
		
		ebaySignInPageActions.addToCart(addtocart);
		
	}

}
