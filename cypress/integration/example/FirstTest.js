describe('My First Test', function() 
{
    it('Verify Title of the page positive', function() 
    {
     cy.visit('http://node-1.nginx.portal.da-1.rbcus.qa.aws.veriday.net/login')
     cy.title().should('eq','Welcome - Digital Agent')
    })

  })