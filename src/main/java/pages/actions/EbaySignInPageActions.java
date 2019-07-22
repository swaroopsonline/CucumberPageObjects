package pages.actions;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pages.locators.EbayRegistrationPageLocator;
import pages.locators.EbaySignInPageLocator;
import utils.SeleniumDriver;

public class EbaySignInPageActions {

	EbaySignInPageLocator ebaySignInPageLocator = null;

	public EbaySignInPageActions() {

		this.ebaySignInPageLocator = new EbaySignInPageLocator();
		PageFactory.initElements(SeleniumDriver.getDriver(), ebaySignInPageLocator);
	}

	public void typeEmailAddress(String emailAddress) {

		ebaySignInPageLocator.emailAddress.sendKeys("Gabbar.singh784@gmail.com");

	}

	public void typePassword(String passWord) {

		ebaySignInPageLocator.passWord.sendKeys("Gabbu784$");

	}

	public void signInToSubmit(String signIn) {

		ebaySignInPageLocator.signIn.click();

	}

	public void goToSearchBar(String searchBar) {

		Actions action = new Actions(SeleniumDriver.getDriver());
		action.moveToElement(ebaySignInPageLocator.searchBar).perform();

	}

	public void typeBoseHeadphone(String boseHeadphone) {

		ebaySignInPageLocator.searchHeadPhones.sendKeys("Bose headphone");

	}
	
	public void clickSearchButton(String searchButton) {

		ebaySignInPageLocator.clickSearch.click();

	}
	
	public void clickFirstBoseHeadphone(String firstBoseHeadphone) {

		Actions action = new Actions(SeleniumDriver.getDriver());
		action.moveToElement(ebaySignInPageLocator.clickFirstBoseHeadphone).click();

		//ebaySignInPageLocator.clickFirstBoseHeadphone.click();

	}
	
	public void addToCart(String addtocart) {

		Actions action = new Actions(SeleniumDriver.getDriver());
		action.moveToElement(ebaySignInPageLocator.addToCart).click();
		
		//ebaySignInPageLocator.addToCart.click();

	}




}
