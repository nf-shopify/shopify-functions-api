module.exports = [
    {
      functionName: "Cart and Checkout Validation",
      functionEndpoint: "cartValidation",
      display: true,
      scenarios: [
        {
          scenarioName:
            "Min/Max : Minumum Order Quantity 2 - Maximum Order Quantity 5",
          scenarioEndpoint: "minMax",
          display: true,
          samplePayload: {
            cart: {
              buyerIdentity: {
                email: "user@example.com",
                isAuthenticated: false,
              },
              cost: {
                totalAmount: {
                  amount: "1234.0",
                  currencyCode: "CAD",
                },
              },
            },
          },
        },
        {
          scenarioName: "VIP Customer : Customer has VIP tag",
          scenarioEndpoint: "vipCustomer",
          display: true,
          samplePayload: {
            cart: {
              buyerIdentity: {
                email: "user@example.com",
                isAuthenticated: false,
              },
              cost: {
                totalAmount: {
                  amount: "1234.0",
                  currencyCode: "CAD",
                },
              },
            },
          },
        },
      ],
    },
    {
      functionName: "Local Pickup Delivery Option Generator",
      functionEndpoint: "localPickup",
      display: true,
      scenarios: [
        {
          scenarioName:
            "Single Location : Local Pickup will only display 1 option",
          scenarioUrl: "singleLoction",
          display: true,
          samplePayload: {
            cart: {
              buyerIdentity: {
                email: "user@example.com",
                isAuthenticated: false,
              },
              cost: {
                totalAmount: {
                  amount: "1234.0",
                  currencyCode: "CAD",
                },
              },
            },
          },
        },
      ],
    },
  ];
