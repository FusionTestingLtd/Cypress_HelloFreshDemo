// need this line to enable intillisense!
/// <reference types="cypress" />

describe("Cookie Banner Test Suite", function () {
  before(function () {
    cy.visit("/");
    cy.get("#cookiesDisclaimer").then(function (cookieBanner) {
      this.cookieBanner = cookieBanner;
    });
  });

  beforeEach(function () {
    cy.fixture("cookieBannerData").then(function (data) {
      this.data = data;
    });
  });

  it("Cookie banner is visible", function () {
    cy.wrap(this.cookieBanner).should("be.visible");
  });

  it("GOT IT button visibility & text", function () {
    cy.get('button[type="button"].js-cookie-disclaimer-close')
      .should("be.visible")
      .and("contain", this.data.closeBtnText);
  });

  it("Cookie Disclaimer text", function () {
    cy.wrap(this.cookieBanner).then(function () {
      cy.get(".container p").should("contain", this.data.disclaimerText);
    });
  });

  it("Protection Declaration exists, url and text", function () {
    cy.wrap(this.cookieBanner).then(function () {
      cy.get(".container p a")
        .should("have.attr", "href", this.data.termsAndConditionsURL)
        .and("contain", this.data.termsAndConditionsText);
    });
  });

  it("closing the cookie banner", function () {
    cy.get("button.js-cookie-disclaimer-close").click();
    cy.wrap(this.cookieBanner).should("not.exist");
  });
});
