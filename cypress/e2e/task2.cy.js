describe('Task2', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/');
  });

  it('Steps to Verify Resizability on TOOLS QA Page', () => {
    cy.contains('Interactions').click();
    cy.url().should('include', '/interaction');

    cy.get('.accordion').within(() => {
      cy.contains('Elements');
      cy.contains('Forms');
      cy.contains('Alerts, Frame & Windows');
      cy.contains('Widgets');
      cy.contains('Interactions');
      cy.contains('Book Store Application');
    });

    cy.contains('Resizable').click();
    cy.contains('Resizable').should('be.visible');

    cy.get("#resizableBoxWithRestriction")
      .should("have.css", "width", "200px")
      .should("have.css", "height", "200px");

    cy.get('#resizableBoxWithRestriction')
      .find('.react-resizable-handle-se')
      .trigger("mousedown", { which: 1 }, { force: true })
      .trigger("mousemove", { clientX: -60, clientY: -60 }, { force: true })
      .trigger("mouseup", { force: true });

    cy.get('#resizableBoxWithRestriction').should('have.css', 'height', '150px');
    cy.get('#resizableBoxWithRestriction').should('have.css', 'width', '150px');

    cy.get('#resizableBoxWithRestriction')
      .find('.react-resizable-handle-se')
      .trigger("mousedown", { which: 1 }, { force: true })
      .trigger("mousemove", { clientX: 800, clientY: 500 }, { force: true })
      .trigger("mouseup", { force: true });

    cy.get('#resizableBoxWithRestriction').should('have.css', 'height', '300px');
    cy.get('#resizableBoxWithRestriction').should('have.css', 'width', '500px');

    cy.get('#resizable').should('have.class', 'react-resizable');

    let initialWidth, initialHeight;

    cy.get('#resizable')
      .invoke('width')
      .then((width) => (initialWidth = width));

    cy.get('#resizable')
      .invoke('height')
      .then((height) => (initialHeight = height));

    cy.get('#resizable')
      .find('.react-resizable-handle-se')
      .trigger('mousedown', { which: 1 }, { force: true })
      .trigger('mousemove', { clientX: 800, clientY: 500 }, { force: true })
      .trigger('mouseup', { force: true });

    cy.get('#resizable')
      .invoke('width')
      .then((finalWidth) => {
        expect(finalWidth).to.not.equal(initialWidth);
      });

    cy.get('#resizable')
      .invoke('height')
      .then((finalHeight) => {
        expect(finalHeight).to.not.equal(initialHeight);
      });
  });
});
