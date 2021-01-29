// need this line to enable intillisense!
/// <reference types="cypress" />

describe("Hero Section tests", function () {
  before(function () {
    cy.visit("/");
  });

  beforeEach(function () {
    cy.fixture("heroSectionData").then(function (data) {
      this.data = data;
    });
  });

  it("Hero Section Exists", function () {
    cy.get('[data-test-id="homePageBanner"]')
      .should("exist")
      .and("be.visible")
      .and("have.css", "background-image", this.data.backgroundImage);
  });

  it("Hero Section heading and rotating text", function () {
    cy.get('[data-test-id="homePageBanner"] h1')
      .should("contain", this.data.h1Text)
      .and("contain", "money"); //Don't know how to test this highly dynamic property which updates every couple of secs.
  });

  it("Hero Section Text", function () {
    cy.get('[data-test-id="homePageBanner"] span span').should(
      "have.text",
      this.data.heroSectionText
    );
  });

  it("Hero Section View Our Boxes Btn", function () {
    cy.get('[data-test-id="homePageBanner"] div div a')
      .should("have.attr", "href", this.data.viewBoxesUrl)
      .within(function () {
        cy.get("button")
          .should("have.text", this.data.viewBoxesText)
          .and("have.css", "background-color", this.data.backgrounColor)
          .and("have.css", "color", this.data.btnTextColor)
          .and("have.css", "border-color", this.data.borderColor);
      });
  });
  it("Home ScrollDown Btn", function () {
    cy.get("#homeScrollDownButton")
      .should("exist")
      .and("be.visible")
      .within(function () {
        cy.get("button").should("exist").and("be.visible");
        cy.get("svg").should("exist").and("be.visible");
        //not tested the path, as i don't understand 'path' yet...
      });
  });
});
