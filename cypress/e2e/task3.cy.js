describe("Book Store Application Automation", () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/')
      })
    it("Should navigate to Understanding ECMAScript 6 book details", () => {
      cy.contains("Book Store Application").click();
      cy.contains("Book Store").should("be.visible");
      cy.contains("Book Store").click();
      cy.get(".main-header").should("have.text", "Book Store");
      cy.contains("Understanding ECMAScript 6").click();
      cy.contains("Title : Understanding ECMAScript 6").should("be.visible");
      cy.contains("Author : Nicholas C. Zakas").should("be.visible");
    });
  });
  