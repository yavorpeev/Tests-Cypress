describe("General Tests", () => {
  context('Navigate to E-Commerce', () => {
    beforeEach(() => {
      cy.get('a[class*="ng-tns-c115-0"]').contains('E-commerce').click()
    })
    it('Profit card flip', () => {
      cy.contains('nb-card', 'Profit').click()
    })
    it('Currencies Dropdown', () => {
      cy.contains('nb-card', 'Bitcoin').find('.select-button').contains('Bitcoin').click()
      cy.get('.option-list').contains('Tether').click()
    })
    it('Traffic chart', () => {
      cy.contains('nb-card', 'Traffic').find('.select-button').contains('week').click()
      cy.get('.option-list').contains('month').click()
    })
  })
  context('Navigate to IoT Dashboard', () => {
    beforeEach(() => {
      cy.get('a[class*="ng-tns-c115-1"]').contains('IoT Dashboard').click()
    })
    it('Validate top cards', () => {
      cy.contains('nb-card', 'Light').click()
      cy.contains('nb-card', 'Roller Shades').click()
      cy.contains('nb-card', 'Wireless Audio').click()
      cy.contains('nb-card', 'Coffee Maker').click()
    })
    it('Room Management validation', () => {
      cy.get('.scrollable-container').scrollTo(0, 1000)
      cy.contains('nb-card', 'Room Management').find('.room-text').contains('Bedroom').click({force: true})
      cy.contains('nb-card', 'Room Management').find('.room-text').contains('Kitchen').click({force: true})
    })
    it('My Playlist validation', () => {
      cy.contains('nb-card', 'My Playlist').find('.controls').find('.play-button').click()
      cy.contains('nb-card', 'My Playlist').find('.controls').find('.skip-forward-button').click()
      cy.contains('nb-card', 'My Playlist').find('.volume').find('[data-name="volume-down"]').click()
    })
    it('Solar Energy Consumption validation', () => {
      cy.get('.scrollable-container').scrollTo(0, 1500)
      cy.contains('nb-card', 'Solar Energy Consumption').find('.echart').should('be.visible')
    })
  })
  context('Navigate to Backend Integration', () => {
    it('Select Backend Integration Options', () => {
      cy.get('a[class*="ng-tns-c115-2"]').contains('Backend Integration').click()
      cy.get('a[class*="ng-tns-c115-6"]').contains('Java').click()
      cy.get('a[class*="ng-tns-c115-3"]').contains('PHP').click()
      cy.get('a[class*="ng-tns-c115-5"]').contains('Node JS').click()
      cy.get('a[class*="ng-tns-c115-4"]').contains('.NET Core').click()
      cy.get('a[class*="ng-tns-c115-7"]').contains('E-commerce').click()
    })
  })
})

