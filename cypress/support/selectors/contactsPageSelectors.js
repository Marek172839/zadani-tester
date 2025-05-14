export const contactsPageSelectors = {
  newContactButton: {
    cz: 'button[data-analytics-id="contactsTable.buttons.addContact"]',
    sk: 'button[data-analytics-id="contactsTable.buttons.addContact"]',
    com: 'button[data-analytics-id="contactsTable.buttons.addContact"]',
  },
  name: {
    cz: "input[name='invoice_attributes_name']",
    sk: "input[name='invoice_attributes_name']",
    com: "#invoice_attributes_name",
  },
  email: {
    cz: "#invoice_attributes_email",
    sk: "#invoice_attributes_email",
    com: "#invoice_attributes_email",
  },
  phone: {
    cz: "input[type='tel']",
    sk: "input[type='tel']",
    com: "input[type='tel']",
  },
  web: {
    cz: "input[name='web']",
    sk: "input[name='web']",
    com: "input[name='web']",
  },
  street: {
    cz: "input[name='street']",
    sk: "input[name='street']",
    com: "input[name='street']",
  },
  city: {
    cz: "input[name='city']",
    sk: "input[name='city']",
    com: "input[name='city']",
  },
  zipCode: {
    cz: "input[name='postcode']",
    sk: "input[name='postcode']",
    com: "input[name='postcode']",
  },
  country: {
    cz: "input[name='contact_address_country_code']",
    sk: "input[name='contact_address_country_code']",
    com: "input[name='contact_address_country_code']",
  },
  territory: {
    cz: null,
    sk: null,
    com: "input[name='contact_address_subdivision']",
  },
  //IČO
  id: {
    cz: "#invoice_attributes_company_number",
    sk: "#invoice_attributes_company_number",
    com: "#invoice_attributes_company_number",
  },
  //DIČ
  vat: {
    cz: "#invoice_attributes_tax_number",
    sk: "#invoice_attributes_company_number",
    com: "#invoice_attributes_tax_number",
  },
  submitButton: {
    cz: "button[data-analytics-id='contacts.buttons.save']",
    sk: "button[data-analytics-id='contacts.buttons.save']",
    com: "button[data-analytics-id='contacts.buttons.save']",
  },
};
