import { ContactPage } from "../support/pages/ContactPage";
import { isLoggedIn } from "../support/utils";

const domains = ["com", "cz", "sk"];
const testCases = [
  { label: "only name", key: "contact_onlyName" },
  { label: "all fields_1", key: "contact_full_1" },
  { label: "all fields_2", key: "contact_full_2" },
];

domains.forEach((domain) => {
  describe(`New contact - ${domain}`, () => {
    let data;
    let page;

    before(() => {
      cy.fixture("contacts.json").then((f) => {
        data = f;
      });
    });

    beforeEach(() => {
      page = new ContactPage(domain);
      cy.visitOnDomain("/", domain);
      cy.trialLogin(domain);
      isLoggedIn(domain);
      page.visit();
    });

    testCases.forEach(({ label, key }) => {
      it(`creates new contact with ${label}`, () => {
        let fixture = data[key];
        page.fillForm(fixture);
        page.submit();
        page.checkContactCreated(fixture.name);
      });
    });
  });
});
