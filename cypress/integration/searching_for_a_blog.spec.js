describe('GIVEN 1 blog posts exist with "Typescript" in the title', () => {
  describe('WHEN a user searches for "Typescript"', () => {
    it('THEN return relevant blog posts', () => {
      cy.visit('http://localhost:3000/blog')
        .get('[data-cy="searchInput"]')
        .click()
        // TODO test should not fail if blogs with this keyword no longer exist
        .type('Typescript')
      cy.get('[data-cy="blog-post-card-title"]').should('have.length', 1)
    })
  })
  describe('WHEN a user selects a tag', () => {
    it('THEN return at least one article containing the selected tag', () => {
      cy.visit('http://localhost:3000/blog')
        // TODO test should not fail if this tag doesn't exist
        .get('[data-cy="tag_typescript"')
        .first()
        .click()
      cy.get('[data-cy="tag_typescript"]').should('have.lengthOf.above', 1)
    })
  })
})
