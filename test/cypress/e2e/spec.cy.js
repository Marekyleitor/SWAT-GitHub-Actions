describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://www.rimac.com/comprar/soat-digital')
  })
  it.only('Happy path', () => { 
    // cy.visit('https://example.cypress.io')
    //consumo del api
    cy.get("#\\:ride\\:1").type("abc-123")
    cy.get("#\\:ride\\:7").type("44444444")
    cy.get("#\\:ride\\:8").type("e@e.com")
    cy.get("#section-hero > div > div.rgrid-hero_form > form > button").click()

    //realizar validacion de un elemento existente
    cy.wait(10000);
    cy.contains("Ingresa los datos de tu vehículo")
    // cy.contains('Ingresa los datos de tu vehículo', { timeout: 30000 })
    // cy.contains('Texto dinámico', { timeout: 15000 }).should('exist');
    cy.get('.form-rimac__subtitle').contains("ABC-123")
  })

  it('Placa Errada - Error', () => {
    // cy.visit('https://example.cypress.io')
    //consumo del api
    cy.get("#\\:ride\\:1").type("abc-123")
    cy.get("#section-hero > div > div.rgrid-hero_form > form > button").click()
    //realizar validacion de un elemento existente
    cy.wait(1000);
    cy.contains("Ingresa un número de placa válido ")
  })
})


