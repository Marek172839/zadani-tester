import { homePageSelectors } from "../support/selectors/homePageSelectors";
import { loginPageSelectors } from "../support/selectors/loginPageSelectors";
import { createTrialEmail } from "../support/utils";

Cypress.Commands.add(
  "visitOnDomain",
  (args, domain = Cypress.env("domain")) => {
    const customVisitCommand = `visit${domain
      .charAt(0)
      .toUpperCase()}${domain.slice(1)}`;
    cy[customVisitCommand](args);
  }
);

Cypress.Commands.add("visitCz", (args) => {
  cy.visit(`https://staging.fakturaonline.cz${args}`);
});

Cypress.Commands.add("visitCom", (args) => {
  cy.visit(`https://staging.invoiceonline.com${args}`);
});

Cypress.Commands.add("visitSk", (args) => {
  cy.visit(`https://staging.fakturaonline.sk${args}`);
});

Cypress.Commands.add("trialLogin", (args) => {
  const domain = args || Cypress.env("domain");
  cy.visitOnDomain("/", domain);
  cy.get(homePageSelectors.loginButton[domain]).click();
  cy.get(loginPageSelectors.trialForm[domain].emailInput).type(
    createTrialEmail()
  );
  cy.get(loginPageSelectors.trialForm[domain].submitButton).click();
});
