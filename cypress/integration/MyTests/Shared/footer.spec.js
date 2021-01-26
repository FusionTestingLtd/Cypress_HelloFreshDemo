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
      .find("a")
      .contains(this.data.termsAndConditionsText)
      .should("have.attr", "href", this.data.termsAndConditionsURL)
      .parent("div")
      .find("a")
      .contains(this.data.privacyText)
      .should("have.attr", "href", this.data.privacyURL)
      .parent("div")
      .find("a")
      .contains(this.data.slaveryText)
      .should("have.attr", "href", this.data.slaveryURL);
  });

  it("Social Media links", function () {
    cy.get('div[class="fela-15qrj6g fela-sh1jxl"]')
      .find("a")
      .should("have.attr", "href", this.data.facebookURL)
      .find("title#a11y-Facebook-desktop-id")
      .should("have.text", this.data.facebookTitleText)
      .parent("svg")
      .find("desc")
      .should("have.text", this.data.facebookDescText)
      .parents("div.fela-1v91mpw")
      .find("a")
      .siblings()
      .next()
      .should("have.attr", "href", this.data.twitterURL)
      .find("title#a11y-Twitter-desktop-id")
      .should("have.text", this.data.twiterTitleText)
      .parent("svg")
      .find("desc")
      .should("have.text", this.data.twiterText)
      .parents("div.fela-1v91mpw")
      .find("a")
      .siblings()
      .last()
      .should("have.attr", "href", this.data.instaURL)
      .find("title#a11y-Instagram-desktop-id")
      .should("have.text", this.data.instaTitleText)
      .parent("svg")
      .find("desc")
      .should("have.text", this.data.instaText);
  });
});
