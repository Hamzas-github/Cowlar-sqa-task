describe('Task1', () => {
  it('form testing', () => {
    cy.viewport(1600, 1000)
    cy.visit('/')
    cy.get('.category-cards').contains('Forms').click()
    cy.get('.menu-list').contains('Practice Form').click()
    cy.get('#firstName').type('Cowlar')
    cy.get('#lastName').type('Developer')
    cy.get('#userEmail').type('qaengineer@cowlar.com')
    cy.get('label[for="gender-radio-1"]').click()
    cy.get('#userNumber').type('0123456789')
    cy.get('#dateOfBirthInput').type('{selectall}').type('31 Oct 2023')
    cy.get('#subjects-label').click()
    cy.get('#subjectsInput').type('Computer Science')
    cy.get('.subjects-auto-complete__option').first().click()
    cy.get('label[for="hobbies-checkbox-3"]').click()
    cy.get('#currentAddress').type('Address 1')
    cy.get('#state').click().contains('NCR')
    cy.get('#react-select-3-option-0').click()

    cy.get('#city').click().contains('Delhi')
    cy.get('#react-select-4-option-0').click()

    cy.contains('Submit').click()

    cy.get('.modal-body table tbody').within(() => {
    cy.contains('Student Name').next('td').should('contain', 'Cowlar Developer')
    cy.contains('Student Email').next('td').should('contain', 'qaengineer@cowlar.com')
    cy.contains('Gender').next('td').should('contain', 'Male')
    cy.contains('Mobile').next('td').should('contain', '0123456789')
    cy.contains('Date of Birth').next('td').should('contain', '31 October,2023')
    cy.contains('Subjects').next('td').should('contain', 'Computer Science')
    cy.contains('Hobbies').next('td').should('contain', 'Music')
    cy.contains('Address').next('td').should('contain', 'Address 1')
    cy.contains('State and City').next('td').should('contain', 'NCR Delhi')
    })
    cy.get('#closeLargeModal').click()
  })
})