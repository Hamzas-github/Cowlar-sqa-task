describe('Interactions on ToolsQA website', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/')
    })
  
    it('Navigate to Interactions Page', () => {
      cy.contains('Interactions').click()
      cy.url().should('include', '/interaction')
    })
  
    it('Verify Sidebar tabs', () => {
        cy.contains('Interactions').click();
        cy.get('.accordion').within(() => {
          cy.contains('Elements');
          cy.contains('Forms');
          cy.contains('Alerts, Frame & Windows');
          cy.contains('Widgets');
          cy.contains('Interactions');
          cy.contains('Book Store Application');
        });
      });
  
      it.only('Resize Box 1 and verify dimensions', () => {
        cy.contains('Interactions').click()
        cy.contains('Resizable').click()
        cy.contains('Resizable').should('be.visible')
        cy.get('#resizableBoxWithRestriction').invoke('width').as('initialWidth')
        cy.get('#resizableBoxWithRestriction').invoke('height').as('initialHeight')
      
        cy.get('#resizableBoxWithRestriction')
        .find('.react-resizable-handle-se')
        .trigger('mousedown', { which: 1 })
        .trigger('mousemove', { clientX: 790, clientY: 300 })
        .trigger('mouseup')
            
        cy.get('#resizableBoxWithRestriction').invoke('width').as('finalWidth')
        cy.get('#resizableBoxWithRestriction').invoke('height').as('finalHeight')
      
        cy.get('@initialWidth').then((initialWidth) => {
          cy.get('@initialHeight').then((initialHeight) => {
            cy.get('@finalWidth').then((finalWidth) => {
              cy.get('@finalHeight').then((finalHeight) => {
                expect(finalWidth).to.be.at.least(150)
                expect(finalWidth).to.be.at.most(500)
                expect(finalHeight).to.be.at.least(150)
                expect(finalHeight).to.be.at.most(300)
              })
            })
          })
        })
      })
    })
  