package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class EbayHomePageLocators {

	/*
	 * @FindBy(how=How.LINK_TEXT, using="register") public WebElement
	 * registrationLink;
	 */
	
	@FindBy(how=How.XPATH, using="//*[@id=\"gh-ug-flex\"]/a")
	//@FindBy(how=How.XPATH, using="//*[@id=\"content\"]/div[2]/div/div[2]/div/div[2]/div[1]/div/a[2]")
	public WebElement registrationLink;
	
		
	@FindBy(how=How.LINK_TEXT, using="Sign in")
	public WebElement signInLink;
	
}


	
	
