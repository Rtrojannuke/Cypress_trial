describe('Konga Cypress est', function() {
    it('Visits the Konga Page and click the login button then logs in', function() {
    //Visit the konga Website
    cy.visit("https://www.konga.com/");

    // Clicking the login/signup button
    cy.get("div.ais-InstantSearch__root section.d6575_J-kZm._1eecb_eqPMu div.e5dc4_DR8xw:nth-child(5) div._2d4bb_2rbWX div._40d77_2fZbm div.e5d46_2l87X._16536_xxIKG div._12e27_1r3kc > a._7ad32_SD12Y._16536_xxIKG").click();

    // Entering the email
    cy.get('#username').type("arimiyahmubarak@gmail.com");

    //Entering the password
    cy.get('#password').type("testingthetester");

    // Clicking the login button
    cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click();

    })

})