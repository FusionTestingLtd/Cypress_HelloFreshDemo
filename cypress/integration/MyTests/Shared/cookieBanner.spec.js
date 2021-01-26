// need this line to enable intillisense!
/// <reference types="cypress" />

describe("Cookie Banner Test Suite", function () {
  beforeEach(function () {
    cy.fixture("cookieBannerData").then(function (data) {
      this.data = data;
    });
  });

  it("Cookie banner is visible", function () {
    cy.visit("https://www.hellofresh.co.uk/?locale=en-GB");

    cy.get("#cookiesDisclaimer").should("be.visible");
  });

  it("GOT IT button visibility & text", function () {

    cy.get('button[type="button"].js-cookie-disclaimer-close')
      .should("be.visible")
      .and("contain", this.data.closeBtnText);
  });

  it("Cookie Disclaimer text", function () {
    cy.get("#cookiesDisclaimer")
      .find(".container")
      .find("p")
      .should("contain", this.data.disclaimerText);
  });

  it("Protection Declaration exists, url and text", function () {
    cy.get("#cookiesDisclaimer")
      .find(".container")
      .find("p")
      .find("a")
      .should("have.attr", "href", this.data.termsAndConditionsURL)
      .and("contain", this.data.termsAndConditionsText);
  });

  it("closing the cookie banner", function () {
    cy.get("button.js-cookie-disclaimer-close").click();
    cy.get("#cookiesDisclaimer").should("not.exist");
  });
});
