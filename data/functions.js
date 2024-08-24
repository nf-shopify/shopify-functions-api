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
            lines: [
              {
                quantity: 1,
                merchandise: {
                  id: "gid://shopify/ProductVariant/49178510983471",
                  title: "Super Star T Shirt",
                },
              },
              {
                quantity: 2,
                merchandise: {
                  id: "gid://shopify/ProductVariant/50310723371311",
                  title: "Super Running Shoes",
                },
              },
            ],
          },
        },
      },
      {
        scenarioName: "VIP Customer : Customer has VIP tag",
        scenarioEndpoint: "vipTag",
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
        scenarioName: "Single Location : Local Pickup will only display 1 option",
        scenarioEndpoint: "singleLoction",
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
