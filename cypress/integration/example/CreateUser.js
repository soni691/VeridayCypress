/// <reference types="cypress"/>

import LoginPage from "../PageObject/LoginPage"
import UserManager from "../PageObject/UserManager"

describe('My First Test', function () {
        
    it('Valid Login test', function () {
        const lp = new LoginPage
        lp.Visit()
        lp.fillEmail('da.client.admin@veriday.com')
        lp.fillPassword('Test12345')
        lp.submit()
        const um = new UserManager
        um.CreatePrimaryuser()
    })

})