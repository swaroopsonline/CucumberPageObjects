package pages.actions;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pages.locators.EbayHomePageLocators;
import utils.SeleniumDriver;

public class EbayHomePageActions {
	
	EbayHomePageLocators ebayHomePageLocators = null;
	
	public EbayHomePageActions () {
		
		this.ebayHomePageLocators = new EbayHomePageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), ebayHomePageLocators);
		
	}
	
	
	public void clickOnRegisterLink(){
		
		PageFactory.initElements(SeleniumDriver.getDriver(), ebayHomePageLocators);
		ebayHomePageLocators.registrationLink.click();
		
	}
	
	public void clickOnSigninLink() {
		
		PageFactory.initElements(SeleniumDriver.getDriver(), ebayHomePageLocators);
		ebayHomePageLocators.signInLink.click();
		
		
	}
	
}


		
	


