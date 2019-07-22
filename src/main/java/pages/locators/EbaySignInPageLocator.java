package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class EbaySignInPageLocator {
	
	@FindBy(how=How.XPATH, using="//*[@id=\"userid\"]")
	public WebElement emailAddress;
	
	
	@FindBy(how=How.XPATH, using="//*[@id=\"pass\"]")
	public WebElement passWord;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"sgnBt\"]")
	public WebElement signIn;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"gh-ac\"]")
	public WebElement searchBar;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"gh-ac\"]")
	public WebElement searchHeadPhones;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"gh-btn\"]")
	public WebElement clickSearch;
	
	@FindBy(how=How.XPATH, using="//h3[@class='s-item__title s-item__title--has-tags'][contains(.,'SPONSOREDBose QuietComfort QC25 Headphones - Special Edition Full Black')]")
	public WebElement clickFirstBoseHeadphone;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"isCartBtn_btn\"]")
	public WebElement addToCart;

}
