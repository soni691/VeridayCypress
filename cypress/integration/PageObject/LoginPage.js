/// <reference types="cypress"/>

class LoginPage
{
    Visit()
    {
        cy.visit('http://node-1.nginx.portal.da-1.rbc.qa.aws.veriday.net/login')       
    }

    fillEmail(value)
    {
        const field = cy.get('.loginEmail')
        field.clear()
        field.type(value)
        return this
    }
    fillPassword(value)
    {
        const field = cy.get('.loginPassword')
        field.clear()
        field.type(value)
        return this
    }
    submit()
    {
        const button =cy.get("[type = 'submit']")
        button.click()
    }
}

export default LoginPage