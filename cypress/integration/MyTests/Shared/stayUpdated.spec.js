/*
do all the objects exist
can we type into the email address box
if we a non valid email address does the submit button work
if we type a valid email address does the submit btn become active.

can we stub out the get / post calls for the submit btn?
*/

/// <reference types="cypress" />

describe("Stay updated Element Existance", function () {
  before(function () {
    cy.visit("/");
    cy.scrollTo("bottom", { duration: 1000 });
    cy.wait(500);
    cy.scrollTo("bottom", { duration: 500 });
  });

  beforeEach(function () {
    cy.fixture("stayUpdatedData").then(function (data) {
      this.data = data;
    });
  });

  it("Stay Updated Container Exists", function () {
    cy.get(
      'div[class="fela-iavuc5 fela-kzocwk fela-qfsv1a"] .fela-6avdm3'
    ).should("exist");
  });

  it("Stay Updated Title", function () {
    cy.get("h3.fela-153xw2s")
      .should("have.text", this.data.stayUpdatedTitle)
      .and("be.visible");
  });

  it("Stay Updated Heading", function () {
    cy.get("div.fela-1kw6ibb span").should(
      "have.text",
      this.data.stayUpdatedHeading
    );
  });

  it("Stay Updated TextBox exists", function () {
    cy.get("form.fela-1k8t6ef label").should(
      "have.text",
      this.data.stayUpdatedTextBoxDefaultText
    );
    cy.get("input").should(
      "have.attr",
      "placeholder",
      this.data.stayUpdatedPlaceholder
    );
  });

  it("Stay Updated Subscribe btn exists", function () {
    cy.get("form.fela-1k8t6ef button")
      .should("exist")
      .and("be.visible")
      .and("contain", this.data.stayUpdatedSubscribeBtnText);
  });
});

describe("Stay Updated From Validation Tests", function () {
  it("Typing in the email text box", function () {
    cy.get("form.fela-1k8t6ef input")
      .should("not.be.disabled")
      .type("We can type in the text box!")
      .then(function (x) {
        cy.wrap(x)
          .invoke("prop", "value")
          .should("contain", "We can type in the text box!");
      });
  });

  it("Typing invalid email address, btn state", function () {
    cy.get("form.fela-1k8t6ef input").clear();
    cy.get("form.fela-1k8t6ef button").should("have.attr", "disabled");
    cy.get("form.fela-1k8t6ef input").type("abc");
    cy.get("form.fela-1k8t6ef button").should("have.attr", "disabled");
    cy.get("form.fela-1k8t6ef input").clear();
    cy.get("form.fela-1k8t6ef input").type("abc@");
    cy.get("form.fela-1k8t6ef button").should("have.attr", "disabled");
    cy.get("form.fela-1k8t6ef input").clear();
    cy.get("form.fela-1k8t6ef input").type("abc@moo");
    cy.get("form.fela-1k8t6ef button").should("have.attr", "disabled");
    cy.get("form.fela-1k8t6ef input").clear();
    cy.get("form.fela-1k8t6ef input").type("abc@moo.");
    cy.get("form.fela-1k8t6ef button").should("have.attr", "disabled");
  });

  it("Typing valid email address, btn state", function () {
    cy.get("form.fela-1k8t6ef input").clear();
    cy.get("form.fela-1k8t6ef button").should("have.attr", "disabled");
    cy.get("form.fela-1k8t6ef input").type("abc@abc.com");
    cy.get("form.fela-1k8t6ef button").should("not.have.attr", "disabled");
  });

  it("removing '.com' & validate btn state", function () {
    cy.get("form.fela-1k8t6ef input").clear();
    cy.get("form.fela-1k8t6ef button").should("have.attr", "disabled");
    cy.get("form.fela-1k8t6ef input").type("abc@abc.com");
    cy.get("form.fela-1k8t6ef button").should("not.have.attr", "disabled");
    cy.get("form.fela-1k8t6ef input").type("{backspace}{backspace}{backspace}");
    cy.get("form.fela-1k8t6ef button").should("have.attr", "disabled");
  });
});
