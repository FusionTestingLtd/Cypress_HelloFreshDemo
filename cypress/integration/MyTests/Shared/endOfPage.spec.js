// need this line to enable intillisense!
/// <reference types="cypress" />

describe("End of Page Test Suite", function () {
  before(function () {
    cy.visit("/");
    //scrolling too fast prevents the footer section being displayed.
    //scroll once to the bottom over time, which triggers the footer to be loaded
    //scroll to the bottom again to get the true page bottom.
    cy.scrollTo("bottom", { duration: 500 });
    cy.wait(500);
    cy.scrollTo("bottom", { duration: 500 });
    cy.get("div.fela-t9jntg").then(function (linksDiv) {
      //used multiple times so added its own object.
      this.linksDiv = linksDiv;
    });
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
    cy.wrap(this.linksDiv)
      .contains(this.data.helloFreshHeading)
      .then(function () {
        cy.get("div.fela-15qrj6g ul.fela-9yxtmw").within(function () {
          cy.get("li").eq(0).should("have.text", this.data.giftCardText);
          cy.get("a").eq(0).should("have.attr", "href", this.data.giftCardURL);
          cy.get("li").eq(1).should("have.text", this.data.uniDaysText);
          cy.get("a").eq(1).should("have.attr", "href", this.data.uniDaysURL);
          cy.get("li").eq(2).should("have.text", this.data.studentBeansText);
          cy.get("a")
            .eq(2)
            .should("have.attr", "href", this.data.studentBeansURL);
          cy.get("li").eq(3).should("have.text", this.data.recipesText);
          cy.get("a").eq(3).should("have.attr", "href", this.data.recipesURL);
          cy.get("li").eq(4).should("have.text", this.data.blogText);
          cy.get("a").eq(4).should("have.attr", "href", this.data.blogURL);
          cy.get("li").eq(5).should("have.text", this.data.affiliateText);
          cy.get("a").eq(5).should("have.attr", "href", this.data.affiliateURL);
        });
      });
  });

  it("Our Company link text and Urls", function () {
    cy.wrap(this.linksDiv).then(function () {
      cy.get("div.fela-6ffw33")
        .should("contain", this.data.ourCompanyHeading)
        .parents("div.fela-t9jntg")
        .find("ul")
        .eq(1)
        .within(function () {
          cy.get("li").eq(0).should("have.text", this.data.helloFreshGroupText);
          cy.get("a")
            .eq(0)
            .should("have.attr", "href", this.data.helloFreshGroupURL);
          cy.get("li").eq(1).should("contain", this.data.careersText);
          cy.get("a").eq(1).should("have.attr", "href", this.data.careersURL);
          cy.get("span").eq(0).should("contain", this.data.hiringIndicatorText);
          cy.get("li").eq(2).should("have.text", this.data.pressText);
          cy.get("a").eq(2).should("have.attr", "href", this.data.pressURL);
          cy.get("li").eq(3).should("have.text", this.data.newLookText);
          cy.get("a").eq(3).should("have.attr", "href", this.data.newLookURL);
        });
    });
  });

  it("Help section link text and Urls", function () {
    cy.wrap(this.linksDiv)
      .contains(this.data.helpHeading)
      .then(function () {
        cy.get("div.fela-15qrj6g ul.fela-9yxtmw").eq(2).within(function () {
          cy.get("li").eq(0).should("have.text", this.data.findAnswerText);
          cy.get("a")
            .eq(0)
            .should("have.attr", "href", this.data.findAnswerURL);
          cy.get("li").eq(1).should("contain", this.data.helpCentreText);
          cy.get("a")
            .eq(1)
            .should("have.attr", "href", this.data.helpCentreURL);
        });
      });
  });

  it("Download App section text, icons and Urls", function () {
    cy.get('div[class="fela-140n9qh fela-a7a4op"]')
      .find("div#app-download-title-desktop")
      .should("contain", this.data.downloadAppHeading)
      .parents("div.fela-1v2ee6e")
      .within(function () {
        cy.get("p").eq(0).should("contain", this.data.downloadAppText);
        cy.get("ul")
          .eq(0)
          .within(function () {
            cy.get("li").eq(0);
            cy.get("a")
              .eq(0)
              .should("have.attr", "href", this.data.appStoreURL);
            cy.get("img")
              .eq(0)
              .should("have.attr", "alt", this.data.appStoreALT);
            cy.get("li").eq(1);
            cy.get("a")
              .eq(1)
              .should("have.attr", "href", this.data.googlePlayURL);
            cy.get("img")
              .eq(1)
              .should("have.attr", "alt", this.data.googlePlayALT);
          });
      });
  });
});
