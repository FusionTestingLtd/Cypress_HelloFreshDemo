// need this line to enable intillisense!
/// <reference types="cypress" />

describe("Navigation Test", function () {
  before(function () {
    cy.visit("/");
  });

  beforeEach(function () {
    cy.fixture("navigationData").then(function (data) {
      this.data = data;
    });
  });

  it("Brand Logo", function () {
    cy.get('[data-test-id="desktop-hellofresh-logo"]').should(
      "have.attr",
      "alt",
      this.data.brandLogoAlt
    );
    cy.get('[data-test-id="logo"]').should(
      "have.attr",
      "href",
      this.data.brandLogoUrl
    );
  });

  it("Navigation Bar: How it Works", function () {
    cy.get(
      '#main-navigation[role="navigation"] span a#link_our-recipe-boxes_en-GB'
    )
      .should("have.text", this.data.recipieBoxText)
      .and("have.attr", "href", this.data.recipieBoxUrl);
      cy.wait(500)

    cy.get("span#links-left-navigation-public").within(function () {
      cy.get("span.fela-_d1ib85")
        .eq(0)
        .should("contain", this.data.HowItWorksHeadingTitleText)
        .trigger("mouseover")
        .within(function () {
          cy.get("a")
            .eq(0)
            .should("have.attr", "href", this.data.HowItWorksHeadingUrl);
          cy.get("span")
            .eq(1)
            .should("have.text", this.data.HowItWorksHeadingLinkText)
            .and("be.visible");
          cy.get("a")
            .eq(1)
            .should("have.attr", "href", this.data.SustainabilityUrl);
          cy.get("span")
            .eq(2)
            .should("have.text", this.data.SustainabilityText)
            .and("be.visible");
          cy.get("a")
            .eq(2)
            .should("have.attr", "href", this.data.C02NeutralUrl);
          cy.get("span")
            .eq(3)
            .should("have.text", this.data.C02NeutralText)
            .and("be.visible");
        });
      cy.get("span.fela-_d1ib85").eq(0).trigger("mouseout");
    });
  });

  it("Navigation Bar: Our Recipes", function () {
    cy.get("span#links-left-navigation-public").within(function () {
      cy.get("span.fela-_d1ib85")
        .eq(1)
        .should("contain", this.data.OurRecipesTitleText)
        .trigger("mouseover")
        .within(function () {
          cy.get("a").eq(0).should("have.attr", "href", this.data.menuUrl);
          cy.get("span")
            .eq(1)
            .should("have.text", this.data.menuLinkText)
            .and("be.visible");
          cy.get("a").eq(1).should("have.attr", "href", this.data.recipieUrl);
          cy.get("span")
            .eq(2)
            .should("have.text", this.data.recipieLinkText)
            .and("be.visible");
        });
      cy.get("span.fela-_d1ib85").eq(1).trigger("mouseout");
    });
  });

  it("COVID-19 Update", function () {
    cy.get('span#links-left-navigation-public a[title="COVID-19 Updates"]')
      .should("have.text", this.data.COVIDText)
      .and("have.attr", "href", this.data.COVIDUrl);
  });

  it("Gift Cards", function () {
    cy.get('span#links-left-navigation-public a[title="Gift Cards"]')
      .should("have.text", this.data.GiftCardsText)
      .and("have.attr", "href", this.data.GiftCardsUrl);
  });

  it("Log In Button", function () {
    cy.get('[data-test-id="menu-item-login-button"]')
      .should("have.attr", "href", this.data.LoginUrl)
      .and("have.text", this.data.LoginText);
  });
});
