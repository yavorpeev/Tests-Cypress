export class Features {

  selectGroupMenuItem(groupName){
    cy.contains('a', groupName).then( menu => {
      cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then( attr => {
        console.log(attr)
        if( attr.includes('left')){
          cy.wrap(menu).click()
        }
      })
    })
  }

  stepperPage(){
    this.selectGroupMenuItem('Layout')
    cy.contains('Stepper').click()
    cy.url().should('contain', 'stepper')
  }

  listPage(){
    this.selectGroupMenuItem('Layout')
    cy.contains('List').click()
    cy.url().should('contain', 'list')
  }

  tabsPage(){
    this.selectGroupMenuItem('Layout')
    cy.contains('Tabs').click()
    cy.url().should('contain', 'tabs')
  }

  formsLayoutsPage(){
    this.selectGroupMenuItem('Forms')
    cy.contains('Form Layouts').click()
    cy.url().should('contain', 'layouts')
  }

  toasterPage(){
    this.selectGroupMenuItem('Modal & Overlays')
    cy.contains('Toastr').click()
    cy.url().should('contain', 'toastr')
  }

  tooltipPage(){
    this.selectGroupMenuItem('Modal & Overlays')
    cy.contains('Tooltip').click()
    cy.url().should('contain', 'tooltip')
  }

  chatPage(){
    this.selectGroupMenuItem('Extra Components')
    cy.contains('Chat').click()
    cy.url().should('contain', 'chat')
  }

  errorPage(){
    this.selectGroupMenuItem('Miscellaneous')
    cy.contains('404').click()
    cy.url().should('contain', '404')
  }
  smartTablePage(){
    this.selectGroupMenuItem('Tables & Data')
    cy.contains('Smart Table').click()
    cy.url().should('contain', 'smart-table')
  }
  loginPage(){
    this.selectGroupMenuItem('Auth')
    cy.contains('Login').click()
    cy.url().should('contain', 'login')
  }

}

export const navigateTo = new Features()

export const SomeFruitsList =
  [ " Lemons  " +
  "Raspberries  " +
  "Strawberries  " +
  "Blackberries  " +
  "Kiwis  " +
  "Grapefruit  " +
  "Avocado  " +
  "Watermelon  " +
  "Cantaloupe  " +
  "Oranges  " +
  "Peaches " ]
