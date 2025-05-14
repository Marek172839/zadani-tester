import { contactsPageSelectors as s } from "../selectors/contactsPageSelectors";
import { sel } from "../utils";

export class ContactPage {
  constructor(domain) {
    this.domain = domain;
    this.urls = {
      cz: "https://staging.fakturaonline.cz/kontakty/new",
      sk: "https://staging.fakturaonline.sk/kontakty/new",
      com: "https://staging.invoiceonline.com/contacts/new",
    };
  }

  visit() {
    cy.visit(this.urls[this.domain]);
  }

  /** Generic text/number input */
  fill(map, value, force = false) {
    const selector = sel(map, this.domain);
    if (!selector || value === undefined) return;
    cy.get(selector).click({ force }).type(value, { force });
  }

  /** Element‑UI <el-select> input */
  fillSelect(map, value) {
    const selector = sel(map, this.domain);
    if (!selector || value === undefined) return;

    cy.get(selector).click({ force: true }).type(value, { force: true });

    cy.get(
      ".el-select-dropdown .el-select-dropdown__item, .el-select-dropdown__item"
    )
      .first()
      .click({ force: true });
  }

  fillForm(data = {}) {
    this.fill(s.name, data.name);
    this.fill(s.email, data.email);
    this.fill(s.phone, data.phone);
    this.fill(s.web, data.web);
    this.fill(s.street, data.street);
    this.fill(s.city, data.city);
    this.fill(s.zipCode, data.zipCode);
    this.fill(s.id, data.id);
    this.fill(s.vat, data.vat);

    this.fillSelect(s.country, data.country);
    this.fillSelect(s.territory, data.territory);
  }

  submit() {
    cy.get(sel(s.submitButton, this.domain)).click();
  }

  checkContactCreated(contactName) {
    cy.get('[data-test="name_column"]').should("contain.text", contactName);
  }
}
