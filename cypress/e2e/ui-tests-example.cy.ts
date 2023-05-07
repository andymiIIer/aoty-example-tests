describe("UI tests for AOTY", () => {
    it("Clicking on sort option should update dropdown menu", () => {
        cy.visit("/album/635457-billy-woods-kenny-segal-maps/user-reviews")
        cy.get(".menuDropSelectedText")
            .as("selectedSort")

        cy.get("@selectedSort")
            .should("have.text", "Popular")

        cy.get(".menuDropSelected li")
            .contains("Recent")
            .click()

        cy.get("@selectedSort")
            .should("have.text", "Recent")
    })  

    it("Clicking on MORE RECENT REVIEWS button loads review page with proper sorting option", () => {
        cy.visit("/album/635457-billy-woods-kenny-segal-maps")
        cy.get(".largeButton")
            .contains("More recent reviews")
            .click()

        cy.url()
            .should("include.text", "user-reviews")

        cy.get(".menuDropSelectedText")
            .should("have.text", "Recent")
    })
})