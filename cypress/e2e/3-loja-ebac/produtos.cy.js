/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    afterEach(() => {
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click()
    });

    it('Deve selecionar o primeiro produto da lista', () => {
        cy.get('.product-block').first().click()
    });

    it('Deve selecionar o último produto da lista', () => {
        cy.get('.product-block').last().click()
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block').eq(2).click()
    });

});