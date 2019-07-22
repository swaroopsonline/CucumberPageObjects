$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchHeadphones.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Search-headphone page is working fine",
  "description": "Inorder to validate that\nthe search headphone page is working fine on ebay\nwe will do the acceptance testing",
  "id": "acceptance-testing-to-validate-search-headphone-page-is-working-fine",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-headphones"
    }
  ]
});
formatter.before({
  "duration": 46902272000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Validate the registration",
  "description": "",
  "id": "acceptance-testing-to-validate-search-headphone-page-is-working-fine;validate-the-registration",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Registration-Positive"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I\u0027m on the homepage \"https://www.ebay.com.au/\" of ebay website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on the \"register\" link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "type your \"First Name\",",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "write your \"Last Name\",",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "give your \"Email\",",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "quote your \"Password\",",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \"Register\",",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "move to \"logout\" menu,",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I will \"logout\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.ebay.com.au/",
      "offset": 21
    }
  ],
  "location": "EbayWebsiteSteps.i_m_on_the_homepage_of_ebay_website(String)"
});
formatter.result({
  "duration": 13237124000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register",
      "offset": 16
    }
  ],
  "location": "EbayWebsiteSteps.i_click_on_the_link(String)"
});
formatter.result({
  "duration": 6097194223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Name",
      "offset": 11
    }
  ],
  "location": "EbayWebsiteSteps.type_your(String)"
});
formatter.result({
  "duration": 1376552889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last Name",
      "offset": 12
    }
  ],
  "location": "EbayWebsiteSteps.write_your(String)"
});
formatter.result({
  "duration": 287209777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 11
    }
  ],
  "location": "EbayWebsiteSteps.give_your(String)"
});
formatter.result({
  "duration": 146066222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 12
    }
  ],
  "location": "EbayWebsiteSteps.quote_your(String)"
});
formatter.result({
  "duration": 199465333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 12
    }
  ],
  "location": "EbayWebsiteSteps.i_click_on(String)"
});
formatter.result({
  "duration": 4031630666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logout",
      "offset": 9
    }
  ],
  "location": "EbayWebsiteSteps.move_to_menu(String)"
});
formatter.result({
  "duration": 30664039556,
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00273.141.5\u0027, revision: \u0027d54ebd709a\u0027, time: \u00272018-11-06T11:42:16\u0027\nSystem info: host: \u0027SMITAPC\u0027, ip: \u0027192.168.0.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:332)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\r\n\tat java.util.LinkedHashMap$LinkedValues.forEach(Unknown Source)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\r\n\tat pages.actions.EbayRegistrationPageActions.moveToLogoutMenu(EbayRegistrationPageActions.java:61)\r\n\tat steps.EbayWebsiteSteps.move_to_menu(EbayWebsiteSteps.java:70)\r\n\tat ✽.And move to \"logout\" menu,(SearchHeadphones.feature:16)\r\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00273.141.5\u0027, revision: \u0027d54ebd709a\u0027, time: \u00272018-11-06T11:42:16\u0027\nSystem info: host: \u0027SMITAPC\u0027, ip: \u0027192.168.0.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:279)\r\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:44)\r\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\t\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\r\n\t\tat pages.actions.EbayRegistrationPageActions.moveToLogoutMenu(EbayRegistrationPageActions.java:61)\r\n\t\tat steps.EbayWebsiteSteps.move_to_menu(EbayWebsiteSteps.java:70)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\t\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\t\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\t\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\t\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\t\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\t\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\t\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\t\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\t\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\t\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\t\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\t\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\t\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\t\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\t\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\t\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\t\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\t\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\t\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\t\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\t\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\t\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\t\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\t\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\t\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\t\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\t\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\t\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\t\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\t\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\t\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\t\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\t\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\t\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\t\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\t\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:328)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\r\n\tat java.util.LinkedHashMap$LinkedValues.forEach(Unknown Source)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\r\n\tat pages.actions.EbayRegistrationPageActions.moveToLogoutMenu(EbayRegistrationPageActions.java:61)\r\n\tat steps.EbayWebsiteSteps.move_to_menu(EbayWebsiteSteps.java:70)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: //*[@id\u003d\"gh-ug\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.5\u0027, revision: \u0027d54ebd709a\u0027, time: \u00272018-11-06T11:42:16\u0027\nSystem info: host: \u0027SMITAPC\u0027, ip: \u0027192.168.0.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 68.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190717172542, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 20936, moz:profile: C:\\Users\\swaro\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6f77c95f-8866-4f48-9c19-1f9e64bc74a5\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"gh-ug\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:204)\r\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:155)\r\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:75)\r\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:84)\r\n\t... 67 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "logout",
      "offset": 8
    }
  ],
  "location": "EbayWebsiteSteps.i_will(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 453109333,
  "status": "passed"
});
formatter.before({
  "duration": 238222,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Validate searching of headphones after login",
  "description": "",
  "id": "acceptance-testing-to-validate-search-headphone-page-is-working-fine;validate-searching-of-headphones-after-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@SignInandSearch-Positive"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I\u0027m on the home page \"https://www.ebay.com.au/\" of ebay website",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on the \"Sign in\" for Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "type the \"Email\" for inputting email address,",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "quote your \"Password\" for password,",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I\u0027ll click on \"Sign In\" for second time signing,",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I go to the \"Search for anything\" bar,",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I\u0027ll type \"Bose headphones\" for headphones,",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I\u0027ll click on \"Search\" for searching the headphone,",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I will click on the \"first Bose Headphone\" to get the first Bose Headphone,",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I\u0027ll \"Add to cart\" for adding the item to the cart.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.ebay.com.au/",
      "offset": 22
    }
  ],
  "location": "EbayWebsiteSteps.i_m_on_the_home_page_of_ebay_website(String)"
});
formatter.result({
  "duration": 2835054223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 16
    }
  ],
  "location": "EbayWebsiteSteps.i_click_on_the_for_Sign_in_link(String)"
});
formatter.result({
  "duration": 2155351556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 10
    }
  ],
  "location": "EbayWebsiteSteps.type_the_for_inputting_email_address(String)"
});
formatter.result({
  "duration": 150084445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 12
    }
  ],
  "location": "EbayWebsiteSteps.quote_your_for_password(String)"
});
formatter.result({
  "duration": 119262667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 15
    }
  ],
  "location": "EbayWebsiteSteps.i_ll_click_on_for_second_time_signing(String)"
});
formatter.result({
  "duration": 2974186222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search for anything",
      "offset": 13
    }
  ],
  "location": "EbayWebsiteSteps.i_go_to_the_bar(String)"
});
formatter.result({
  "duration": 243918667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bose headphones",
      "offset": 11
    }
  ],
  "location": "EbayWebsiteSteps.i_ll_type_for_headphones(String)"
});
formatter.result({
  "duration": 115410222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search",
      "offset": 15
    }
  ],
  "location": "EbayWebsiteSteps.i_ll_click_on_for_searching_the_headphone(String)"
});
formatter.result({
  "duration": 4820930666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first Bose Headphone",
      "offset": 21
    }
  ],
  "location": "EbayWebsiteSteps.i_will_click_on_the_to_get_the_first_Bose_Headphone(String)"
});
formatter.result({
  "duration": 5532889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add to cart",
      "offset": 6
    }
  ],
  "location": "EbayWebsiteSteps.i_ll_for_adding_the_item_to_the_cart(String)"
});
formatter.result({
  "duration": 354667,
  "status": "passed"
});
formatter.after({
  "duration": 434223,
  "status": "passed"
});
});