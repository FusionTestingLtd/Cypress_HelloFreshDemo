//intellisense enable for Cypress.
/// <reference types="cypress" />

//need to scroll to the bottom of the page.

describe("Footer Test Suite", function () {
  before(function () {
    cy.visit("/"); //Go to site under test
    cy.scrollTo("bottom", { duration: 1000 });
    cy.wait(500);
    cy.scrollTo("bottom", { duration: 500 });
  });

  beforeEach(function () {
    //load in data from fixtures file.
    cy.fixture("footerData").then(function (data) {
      this.data = data;
    });
  });

  it("Footer is present & Visibile", function () {
    cy.contains(this.data.termsAndConditionsText)
      .parents("div.fela-6avdm3")
      .should("be.visible");
  });

  it("Copyright", function () {
    cy.get('div[class="fela-15pq5e0 fela-16xv0gg"]').should(
      "have.text",
      this.data.copyRightText
    );
  });

  it("Footer text links", function () {
    cy.contains(this.data.termsAndConditionsText)
      .parents("div.fela-6avdm3")
      .find('div[class="fela-2juahm fela-11qchyo"]')
      .within(function () {
        cy.get("a")
          .eq(0)
          .should("have.text", this.data.termsAndConditionsText)
          .and("have.attr", "href", this.data.termsAndConditionsURL);
        cy.get("a")
          .eq(1)
          .should("have.text", this.data.privacyText)
          .and("have.attr", "href", this.data.privacyURL);
        cy.get("a")
          .eq(2)
          .should("have.text", this.data.slaveryText)
          .and("have.attr", "href", this.data.slaveryURL);
      });
  });

  it("Social Media links", function () {
    cy.get('div[class="fela-15qrj6g fela-sh1jxl"]').within(function () {
      cy.get("a").eq(0).should("have.attr", "href", this.data.facebookURL);
      cy.get("title").eq(0).should("have.text", this.data.facebookTitleText);
      cy.get("desc").eq(0).should("have.text", this.data.facebookDescText);
      cy.get("a").eq(1).should("have.attr", "href", this.data.twitterURL);
      cy.get("title").eq(1).should("have.text", this.data.twiterTitleText);
      cy.get("desc").eq(1).should("have.text", this.data.twiterText);
      cy.get("a").eq(2).should("have.attr", "href", this.data.instaURL);
      cy.get("title").eq(2).should("have.text", this.data.instaTitleText);
      cy.get("desc").eq(2).should("have.text", this.data.instaText);
    });
  });
});
