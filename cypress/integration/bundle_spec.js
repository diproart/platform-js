describe('bundle', () => {
  it('localhost:5000', () => {
    cy.visit('localhost:5000')
    cy.contains('bundle demo')
  })
})

const pkg = require('../../package.json')

describe('vue@2', () => {
  const version = pkg.devDependencies.vue.replace('^', '').replace(/\^|~/, '')
  const rex = new RegExp('(\^)?' + version + '$');

  it(`window & pkg has same version: ${version}`, () => {
    expect(pkg.devDependencies.vue).match(rex)
    cy.window().then($win => {
      expect($win.Vue.version).to.match(rex)
    })
  })

  it('simple vue app worked', () => {
    cy.get('[name=name]').should('have.value', 'name')
    cy.get('[type=submit]').click()
    cy.get('#status').contains('SUBMITTED')
    cy.get('#status').should('have.class', 'is-success')
    cy.get('button.reset').click()
  })
})

describe('vee-validate@3', () => {
  const version = pkg.devDependencies['vee-validate'].replace('^', '').replace(/\^|~/, '')
  const rex = new RegExp('(\^)?' + version + '$');
  it('is @3.x', () => {
    expect(version).match(/^3/)
  })

  it('simple app worked', () => {
    cy.get('[name=name]').clear()
    cy.get('p.help')
      .should('have.class', 'is-danger')
      .should('contain', 'обязательно')
      .should('visible')

    cy.get('[name=name]').type('name')
    cy.get('p.help')
    .should('not.have.class', 'is-danger')
    .should('contain', '')
    .should('hidden')
  })
})

describe('bulma', () => {
  it('bulma pkg version is 0.8.2', () => {
    expect(pkg.devDependencies.bulma).match(/^\^0\.8\.2$/)
  })
})

describe('jquery', () => {
  const version = pkg.devDependencies.jquery.replace(/\^|~/, '')
  const rex = new RegExp('(\^)?' + version);

  it(`window & package has same version: ${version}`, () => {
    expect(pkg.devDependencies.jquery).match(rex)
    cy.window().then($win => {
      expect($win.$.fn.jquery).to.match(rex)
    })
  })
})