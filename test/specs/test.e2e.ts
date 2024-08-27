import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
// import SecurePage from '../pageobjects/secure.page'

describe('My Login application', () => {

    beforeEach(async() => {
        await LoginPage.open()
        await (await $('button')).scrollIntoView({block: 'center'});
    })

    it('should login with valid credentials - pass', async () => {
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(true).toBe(false);
    })
})

