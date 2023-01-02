beforeEach(()=>{
    cy.fixture('example').then(function(dataObject) {
        this.dataObject = dataObject;
    })
})