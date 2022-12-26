Feature: End to End ecommerce validation

    application regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open ecommerce page
    When I add items to cart
    |name|gender|
    |Uday|Male|
    |Archana|Female|
    And Validate the total prices
    Then Select the country, Submit and verify Thank you message

    