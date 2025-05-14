export const sel = (sels, domain) => sels?.[domain] ?? sels?.default ?? null;
export const createTrialEmail = () => `test${Date.now()}@gmail.com`;
export const isLoggedIn = (domain) => {
  const name = {
    cz: "/faktura",
    sk: "/faktura",
    com: "/invoice",
  };
  cy.url().should("include", name[domain]);
};
