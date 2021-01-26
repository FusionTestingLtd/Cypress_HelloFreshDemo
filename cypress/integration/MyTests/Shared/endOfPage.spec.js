// need this line to enable intillisense!
/// <reference types="cypress" />

describe("End of Page Test Suite", function () {
  before(function () {
    cy.visit("https://www.hellofresh.co.uk/");
    //scrolling too fast prevents the footer section being displayed.
    //scroll once to the bottom over time, which triggers the footer to be loaded
    //scroll to the bottom again to get the true page bottom.

    cy.scrollTo("bottom", { duration: 500 });
    cy.wait(500);
    cy.scrollTo("bottom", { duration: 500 });
  });

  beforeEach(function () {
    cy.fixture("endOfPageData").then(function (data) {
      this.data = data;
    });
  });

  it("Page section is visible", function () {
    cy.get("footer").should("exist").and("be.visible");
  });

  it("HelloFresh link text and urls", function () {
    cy.get("div.fela-t9jntg")
      .contains(this.data.helloFreshHeading)
      .parent("div")
      .find("div.fela-15qrj6g")
      .find("ul.fela-9yxtmw")
      .within(function () {
        cy.get("li")
          .eq(0)
          .should("have.text", this.data.giftCardText)
          .find("a")
          .should("have.attr", "href", this.data.giftCardURL);

        cy.get("li")
          .eq(1)
          .should("have.text", this.data.uniDaysText)
          .find("a")
          .should("have.attr", "href", this.data.uniDaysURL);

        cy.get("li")
          .eq(2)
          .should("have.text", this.data.studentBeansText)
          .find("a")
          .should("have.attr", "href", this.data.studentBeansURL);

        cy.get("li")
          .eq(3)
          .should("have.text", this.data.recipesText)
          .find("a")
          .should("have.attr", "href", this.data.recipesURL);

        cy.get("li")
          .eq(4)
          .should("have.text", this.data.blogText)
          .find("a")
          .should("have.attr", "href", this.data.blogURL);

        cy.get("li")
          .eq(5)
          .should("have.text", this.data.affiliateText)
          .find("a")
          .should("have.attr", "href", this.data.affiliateURL);
      });
  });

  it("Our Company link text and Urls", function () {
    cy.get("div.fela-t9jntg");
    cy.get("div.fela-6ffw33")
      .contains(this.data.ourCompanyHeading)
      .parents("div.fela-t9jntg")
      .find("ul")

      .within(function () {
        cy.get("li")
          .eq(0)
          .should("have.text", this.data.helloFreshGroupText)
          .find("a")
          .should("have.attr", "href", this.data.helloFreshGroupURL);

        cy.get("li")
          .eq(1)
          .should("contain", this.data.careersText)
          .find("a")
          .should("have.attr", "href", this.data.careersURL)
          .find("span")
          .should("contain", this.data.hiringIndicatorText);

        cy.get("li")
          .eq(2)
          .should("have.text", this.data.pressText)
          .find("a")
          .should("have.attr", "href", this.data.pressURL);

        cy.get("li")
          .eq(3)
          .should("have.text", this.data.newLookText)
          .find("a")
          .should("have.attr", "href", this.data.newLookURL);
      });
  });

  it("Help section link text and Urls", function () {
    cy.get("div.fela-t9jntg")
      .contains(this.data.helpHeading)
      .parents("div.fela-t9jntg")
      .find("div.fela-15qrj6g")
      .find("ul.fela-9yxtmw")

      .within(function () {
        cy.get("li")
          .eq(0)
          .should("have.text", this.data.findAnswerText)
          .find("a")
          .should("have.attr", "href", this.data.findAnswerURL);

        cy.get("li")
          .eq(1)
          .should("contain", this.data.helpCentreText)
          .find("a")
          .should("have.attr", "href", this.data.helpCentreURL);
      });
  });

  it("Download App section text, icons and Urls", function () {
    cy.get('div[class="fela-140n9qh fela-a7a4op"]')
      .find("div#app-download-title-desktop")
      .should("contain", this.data.downloadAppHeading)
      .parents("div.fela-1v2ee6e")
      .find("p")
      .should("contain", this.data.downloadAppText)
      .parents("div.fela-1v2ee6e")
      .find("ul")
      .within(function () {
        cy.get("li")
          .eq(0)
          .find("a")
          .should("have.attr", "href", this.data.appStoreURL)
          .find("img")
          .should("have.attr", "alt", this.data.appStoreALT);

        cy.get("li")
          .eq(1)
          .find("a")
          .should("have.attr", "href", this.data.googlePlayURL)
          .find("img")
          .should("have.attr", "alt", this.data.googlePlayALT);
      });
  });
});
