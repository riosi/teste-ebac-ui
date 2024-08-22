/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";

describe('Funcionalidade: Cadastro', () => {

    let nome = faker.person.firstName()
    let sobrenome = faker.person.lastName()
    let email = faker.internet.email()

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

       
    
    it('Deve completar o cadastro com sucesso', () => { 

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('teste@123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it.only('Deve completar o cadastro com sucesso usando comando customizado', () => {
        cy.preCadastro(email, 'teste@123', nome, sobrenome)
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })
});