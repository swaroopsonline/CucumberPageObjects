package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class EbayRegistrationPageLocator {
	@FindBy(how=How.XPATH, using="//*[@id=\"firstname\"]")
	public WebElement firstName;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"lastname\"]")
	public WebElement lastName;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"email\"]")
	public WebElement emailAddress;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"PASSWORD\"]")
	public WebElement password;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"ppaFormSbtBtn\"]")
	public WebElement registerButton;
	
	@FindBy(how=How.XPATH,using="//*[@id=\"gh-ug\"]")
	public WebElement movetoLogoutmenu;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"gh-uo\"]/a")
	public WebElement logoutButton;

	//*[@id="gh-uo"]/a

}
