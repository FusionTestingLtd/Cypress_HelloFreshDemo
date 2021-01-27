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
      "HelloFresh"
    ); //<-----
    cy.get('[data-test-id="logo"]').should(
      "have.attr",
      "href",
      "/?locale=en-GB"
    ); //<---
  });

  it("Navigation Bar: How it Works", function () {
    cy.get(
      '#main-navigation[role="navigation"] span a#link_our-recipe-boxes_en-GB'
    )
      .should("have.text", "Our Recipe Boxes") //<---
      .and("have.attr", "href", "/plans"); //<----

    cy.get("span#links-left-navigation-public").within(function () {
      cy.get("span.fela-_d1ib85")
        .eq(0)
        .should("contain", "How It Works") //<----
        .trigger("mouseover")
        .within(function () {
          //<---
          cy.get("a").eq(0).should("have.attr", "href", "/how-it-works/");
          cy.get("span")
            .eq(1)
            .should("have.text", "How It Works")
            .and("be.visible");
          cy.get("a")
            .eq(1)
            .should("have.attr", "href", "/about/sustainability");
          cy.get("span")
            .eq(2)
            .should("have.text", "Sustainability")
            .and("be.visible");
          cy.get("a")
            .eq(2)
            .should("have.attr", "href", "/about/carbon-neutral");
          cy.get("span")
            .eq(3)
            .should("have.text", "C02 Neutral")
            .and("be.visible");
        });
      cy.get("span.fela-_d1ib85").eq(0).trigger("mouseout");
    });
  });

  it("Navigation Bar: Our Recipes", function () {
    cy.get("span#links-left-navigation-public").within(function () {
      cy.get("span.fela-_d1ib85")
        .eq(1)
        .should("contain", "Our Recipes") //<----
        .trigger("mouseover")
        .within(function () {
          //<---
          cy.get("a").eq(0).should("have.attr", "href", "/menus/");
          cy.get("span")
            .eq(1)
            .should("have.text", "On The Menu")
            .and("be.visible");
          cy.get("a").eq(1).should("have.attr", "href", "/recipes/");
          cy.get("span")
            .eq(2)
            .should("have.text", "Recipe Hub")
            .and("be.visible");
        });
    });
  });

  it("Gift Cards", function () {});

  it("COVID-19 Update", function () {});

  it("Log In Button", function () {});
});
