const pages = require("../../../../locators/Pages.json");
const publish = require("../../../../locators/publishWidgetspage.json");

const pageOne = "MyPage1";
const pageTwo = "MyPage2";

describe("Hide / Show page test functionality", function() {
  it("Hide page test ", function() {
    cy.Createpage(pageOne);
    cy.Createpage(pageTwo);

    cy.GlobalSearchEntity(pageOne);
    cy.xpath(pages.popover)
      .last()
      .click({ force: true });
    cy.get(pages.hidePage).click({ force: true });
    cy.ClearSearch();
    cy.PublishtheApp();
    cy.get(".t--page-switch-tab").should("have.length", 2);
  });

  it("Show page test ", function() {
    cy.get(publish.backToEditor)
      .first()
      .click();
    cy.GlobalSearchEntity(pageOne);
    cy.xpath(pages.popover)
      .last()
      .click({ force: true });
    cy.get(pages.showPage).click({ force: true });
    cy.ClearSearch();
    cy.PublishtheApp();
    cy.get(".t--page-switch-tab").should("have.length", 3);
  });
});
