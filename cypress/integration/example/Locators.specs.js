/// <reference types="cypress"/>

describe('My First Test', function () {
    
    it('Verify Title of the page positive', function () {
        cy.visit('http://node-1.nginx.portal.da-1.rbc.qa.aws.veriday.net/login')
        cy.get('.loginEmail').type('da.client.admin@veriday.com')
        cy.get('.loginPassword').type('Test12345')
        cy.get("[type = 'submit']").click()
        cy.get(':nth-child(2) > a > img').click()
        ccy.get('.btn-edit-user-view').click()
    })

})