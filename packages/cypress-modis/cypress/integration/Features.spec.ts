import { SomeFruitsList } from "../support/commands";
import { onFormLayoutsPage } from "../support/page_objects/formLayouts"
describe("Features Tests", () => {
  context('Layout', () => {
    beforeEach(() => {
      cy.get('a[class*="ng-tns-c115-9"]').contains('Layout').click()
    })
    it('Stepper Validation', () => {
      cy.get('a[class*="ng-tns-c115-10"]').contains('Stepper').click()
      cy.get('.step-container').find('.input-group').type('Yavor Peev')
      cy.get('.step-container').find('.mat-ripple').contains('next').click()
      cy.get('.step-container').find('.input-group').type('Die Hard')
      cy.get('.step-container').find('.mat-ripple').contains('next').click()
      cy.get('.step-container').find('.mat-ripple').contains('prev').click()
      cy.get('.step-container').find('.mat-ripple').contains('next').click()
      cy.get('.step-container').find('.input-group').type('Something')
      cy.get('.step-container').find('.mat-ripple').contains('Confirm').click()
      cy.get('.step-container').find('.mat-ripple').contains('Try again').click()
    })
    //it('List Validation', () => {
    //cy.get('a[class*="ng-tns-c115-11"]').contains('List').click()
    //cy.get('.list-card').contains('Some Fruits')
    //cy.get('nb-card > nb-card-body > nb-list').each((item, index) => {
    //cy.wrap(item)
    //.should('contain.text', SomeFruitsList[index])
    //})
    //})
    it('Tabs Validation', () => {
      cy.get('a[class*="ng-tns-c115-14"]').contains('Tabs').click()
      cy.wait(1000) // not best practice
      cy.get('.tab-link').contains('Simple Tab #2').click()
      cy.get('.tab-link').contains('Route tab #2').click()
      cy.get('.tab-link').contains('Simple Tab #1').click()
    })
  })
})
context('Forms', () => {
  beforeEach(() => {
    cy.get('a[class*="ng-tns-c115-15"]').contains('Forms').click()
  })
  it('Form Layouts Validation', () => {
    cy.get('a[class*="ng-tns-c115-17"]').contains('Form Layouts').click()
    cy.contains('nb-card', 'Using the Grid').then(firstForm => {
      const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
      const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
      expect(emailLabelFirst).to.equal('Email')
      expect(passwordLabelFirst).to.equal('Password')


      cy.contains('nb-card', 'Basic form').then(secondForm => {
        const passwordSecondText = secondForm.find('[for="exampleInputPassword1"]').text()
        expect(passwordLabelFirst).to.equal(passwordSecondText)

        cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
      })
    })
  })
  it('Form Layouts Submitting', () => {
    cy.get('a[class*="ng-tns-c115-17"]').contains('Form Layouts').click()
    onFormLayoutsPage.submitInlineFormWithNameAndEmail('Yavor Peev', 'modistest@italy-belgium.com')
    onFormLayoutsPage.submitBasicFormWithEmailAndPassword('modistest@euro2020.com', 'password')
    onFormLayoutsPage.signInUsingtheGridFormWithEmailandPassword('modistest@midnight.com', 'password')
  })
})

