import { homePageSelectors } from "../support/selectors/homePageSelectors";
import { loginPageSelectors } from "../support/selectors/loginPageSelectors";
import { createTrialEmail } from "../support/utils";

describe("Log in as trial", () => {
  const domain = "cz";
  it("Go to homepage", () => {
    cy.visitOnDomain("/", domain);
    cy.get(homePageSelectors.loginButton[domain]).should("be.visible").click();
    cy.url().should("include", "/prihlaseni");
    const trialEmail = createTrialEmail();
    cy.get(loginPageSelectors.trialForm[domain].emailInput).type(trialEmail);
    cy.get(loginPageSelectors.trialForm[domain].submitButton).click();
    cy.url().should("include", "/faktura");
  });
});
