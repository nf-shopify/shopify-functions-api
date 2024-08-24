/*----- Exports ------*/
module.exports = {
  status,
  minMaxValidate,
};

function status() {
  return { endpointStatus: "Online" };
}

function minMaxValidate(input) {
  if (!input.cart || !input.cart.lines) {
    return { error: "No cart or lines found in request body" };
  }
  const { lines } = input.cart;
  const res = lines.reduce((minMaxError, line) => {
    const minOrderQuantity = 2;
    const maxOrderQuantity = 5;
    console.log(line);
    if (line?.quantity < minOrderQuantity) {
      minMaxError.push({
        localizedMessage: `Sorry, the minimum order quantity for ${line?.merchandise?.title} is ${minOrderQuantity}`,
        target: "cart",
      });
    } else if (line?.quantity > maxOrderQuantity) {
      minMaxError.push({
        localizedMessage: `Sorry, the maximum order quantity for ${line?.merchandise?.title} is ${maxOrderQuantity}`,
        target: "cart",
      });
    }
    return minMaxError;
  }, []);
  console.log(res);
  return res;
}
