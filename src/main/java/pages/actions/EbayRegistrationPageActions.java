package pages.actions;

import org.openqa.selenium.By;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pages.locators.EbayRegistrationPageLocator;
import utils.SeleniumDriver;

public class EbayRegistrationPageActions {

	EbayRegistrationPageLocator ebayRegistrationPageLocator = null;

	public EbayRegistrationPageActions() {

		this.ebayRegistrationPageLocator = new EbayRegistrationPageLocator();
		PageFactory.initElements(SeleniumDriver.getDriver(), ebayRegistrationPageLocator);
	}

	public void typeFirstName(String firstName) {

		
		ebayRegistrationPageLocator.firstName.sendKeys("Gabbar");

	}

	public void typeLastName(String lastName) {

		// PageFactory.initElements(SeleniumDriver.getDriver(),
		// ebayRegistrationPageLocator);
		ebayRegistrationPageLocator.lastName.sendKeys("Singh");

	}

	public void typeEmailAddress(String emailAddress) {

		// PageFactory.initElements(SeleniumDriver.getDriver(),
		// ebayRegistrationPageLocator);
		ebayRegistrationPageLocator.emailAddress.sendKeys("Gabbar.singh784@gmail.com");

	}

	public void typePassword(String password) {

		// PageFactory.initElements(SeleniumDriver.getDriver(),
		// ebayRegistrationPageLocator);
		ebayRegistrationPageLocator.password.sendKeys("Gabbu784$");

	}

	public void clickOnRegisterButton() {

		// PageFactory.initElements(SeleniumDriver.getDriver(),
		// ebayRegistrationPageLocator);
		ebayRegistrationPageLocator.registerButton.click();

	}

	public void moveToLogoutMenu() {
		Actions action = new Actions(SeleniumDriver.getDriver());
		action.moveToElement(ebayRegistrationPageLocator.movetoLogoutmenu).perform();
	}

	public void clickOnLogoutButton() {

		//boolean eleSelected= driver.findElement(By.xpath("xpath")).isDisplayed();
		ebayRegistrationPageLocator.logoutButton.click();

	}

}
