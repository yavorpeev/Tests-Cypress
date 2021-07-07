import {SomeFruitsList} from "../support/page_objects/Features";
import {onFormLayoutsPage} from "../support/page_objects/formLayouts"
import {navigateTo} from "../support/page_objects/Features";
import 'cypress-file-upload';
import 'cypress-plugin-tab';

describe("Features Tests", () => {
  context('Layout', () => {
    it('Stepper Validation', () => {
      navigateTo.stepperPage()
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

    it('List Validation', () => {
      navigateTo.listPage()
      cy.contains('nb-card', 'Some Fruits').each((item, index) => {
        cy.wrap(item)
          .should('contain.text', SomeFruitsList[index])
      })
    })

    it('Tabs Validation', () => {
      navigateTo.tabsPage()
      cy.wait(1000) // not best practice
      cy.get('.tab-link').contains('Simple Tab #2').click()
      cy.get('.tab-link').contains('Route tab #2').click()
      cy.get('.tab-link').contains('Simple Tab #1').click()
    })
  })
  context('Forms', () => {
    beforeEach(() => {
      navigateTo.formsLayoutsPage()
    })
    it('Form Layouts Validation', () => {
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
      onFormLayoutsPage.submitInlineFormWithNameAndEmail('Yavor Peev', 'modistest@italy-belgium.com')
      onFormLayoutsPage.submitBasicFormWithEmailAndPassword('modistest@euro2020.com', 'password')
      onFormLayoutsPage.signInUsingtheGridFormWithEmailandPassword('modistest@midnight.com', 'password')
    })
  })
  context('Toastr', () => {
    it('Toaster Validation', () => {
      navigateTo.toasterPage()
      cy.get(':checkbox').uncheck({force: true})
      cy.get('.mat-ripple').contains('Show toast').click()
      cy.get(':checkbox').check({force: true})
      cy.get('[status="success"]').contains('Random toast').click()

    })
  })

  context('Tooltip', () => {
    it('Tooltip Validation', () => {
      navigateTo.tooltipPage()
      cy.contains('nb-card', 'Tooltip Placements').contains('Top').click()
      cy.get('nb-tooltip').should('contain', 'This is a tooltip')
      cy.contains('nb-card', 'Colored Tooltips')
        .contains('Default').click()
      cy.get('nb-tooltip').should('contain', 'This is a tooltip')
    })
  })

  context('Chat', () => {
    beforeEach(() => {
      navigateTo.chatPage()
    })
      it('Send text message', () => {
        cy.get('[type="text"]').type('Hello there')
        cy.get('.send-button').click()
      })

      it('Upload file in chat using Drag&Drop', () => {
        cy.get('[type="text"]').attachFile('test.docx', {subjectType: "drag-n-drop"})
        cy.get('.send-button').click()
      })
    })

    context('Tables Testing', () => {
      beforeEach(() => {
        navigateTo.smartTablePage()
      })
        it('Change Values in Smart Table', () => {
          cy.get('tbody').contains('tr', 'Jack').then(tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="E-mail"]').clear().type('jack@modis.com')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(5).should('contain', 'jack@modis.com')
          })
        })
        it('Add and Delete actions in Smart Table with Tab plugin', () => {
          cy.get('thead').find('.nb-plus').click()
          cy.get('thead tr').eq(2)
            .find('[placeholder="ID"]')
            .type('1111')
            .tab().type('Johnny')
            .tab().type('B')
            .tab().type('johnnyb')
            .tab().type('johnnyb@modis.com')
            .tab().type('50{enter}')
        })
      })
      context('Auth testing', () => {
        beforeEach(() => {
          navigateTo.loginPage()
        })
        it('Login form Positive', () => {
          cy.get('[id="input-email"]').type('loginto@modis.com')
          cy.get('[id="input-password"]').type('password')
          cy.get('[type="checkbox"]').check({force: true})
          cy.get('.appearance-filled').click()
        })
        it('Login form Negative', () => {
          cy.get('[id="input-email"]').type('modis')
          cy.get('[id="input-password"]').type('123')
          cy.get('[type="checkbox"]').check({force: true})
          cy.contains(' Email should be the real one! ').should('be.visible')
          cy.contains(' Password should contain from 4 to 50 characters ').should('be.visible')

        })
      })
    })




