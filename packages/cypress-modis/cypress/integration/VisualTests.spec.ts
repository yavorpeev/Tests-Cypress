import {navigateTo} from "../support/page_objects/Features";

describe('Miscellaneous Visual Testing', () => {
  it('Error 404 Visual Testing', () => {
    navigateTo.errorPage()
    cy.eyesOpen({
      appName: 'Ngx-admin dashboard by Akveo',
      testName: '404 Page Not Found',
    })
    cy.eyesCheckWindow({
      target: 'window',
      fully: true
    })
    cy.eyesClose()
  })
})
