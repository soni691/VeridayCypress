/// <reference types="cypress"/>

class UserManager{
    CreatePrimaryuser()
    {
        const button = cy.get(':nth-child(2) > a > h3')
        button.click()
        const button1 = cy.get('.btn-edit-user-view')
        button1.click()
        const uemail=cy.get('#emailField')
        var currentDate = new Date();
        var currentTime = currentDate.getTime();   
        var commentText = 'Automation' + currentTime + '@email.com';
        uemail.type(commentText)
       const fname=cy.get('#firstNameField') 
        var firstname = 'Automation' + currentTime;
        fname.type(firstname)
        const lname=cy.get('#lastNameField')   
        var lastname = 'PrimaryUser' + currentTime;
        lname.type(lastname)
       const jtitle= cy.get('.job-title > input')
       jtitle.type('QA')
       cy.get('.provincialLicenses').click() //click on provicial license button
       cy.get('#da-option-selection > form > :nth-child(1)').click()
       cy.get('.modal-footer > .btn-primary').click() //click on add button
       cy.contains('Location').scrollIntoView()
       cy.get('#branchSelector').click //click on branch selector dropdown
       cy.get('select').select('  Bankers Hall, West Tower, Suite 4430')
       cy.get(':nth-child(1) > .controls > .bfh-phone').type(8530466046)
       cy.get('.button').click() // click on Save & activate button
        return this
    }

    CreateUserName()
    {
        const uemail=cy.get('#emailField')
        var currentDate = new Date();
        var currentTime = currentDate.getTime();   
        var commentText = 'Automation Testing at ' + currentTime + ' milliseconds';
        uemail.type(commentText)
        return this
    }
}
export default UserManager