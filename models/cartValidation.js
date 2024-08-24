/*----- Exports ------*/
module.exports = {
  status,
  minMaxValidate,
  vipTagValidate
};

/*----- Global Variables ------*/
const MIN_ORDER_QUANTITY = 2;
const MAX_ORDER_QUANTITY = 5;

function status() {
  return { endpointStatus: "Online" };
}

function minMaxValidate(input) {
  if (!input.cart || !input.cart.lines) {
    return { error: "No cart or lines found in request body" };
  }
  const { lines } = input.cart;
  console.log(lines)
  const errors = lines.reduce((error, line) => {
    if (line?.quantity < MIN_ORDER_QUANTITY) {
      error.push({
        localizedMessage: `Sorry, the minimum order quantity for ${line?.merchandise?.title} is ${MIN_ORDER_QUANTITY}`,
        target: "cart",
      });
    } else if (line?.quantity > MAX_ORDER_QUANTITY) {
      error.push({
        localizedMessage: `Sorry, the maximum order quantity for ${line?.merchandise?.title} is ${MAX_ORDER_QUANTITY}`,
        target: "cart",
      });
    }
    return error;
  }, []);

  if (errors.length) return errors;
  return { cartValidationStatus: "No Errors" };
}

function vipTagValidate() {
    return { endpointStatus: "Online" };
  }
