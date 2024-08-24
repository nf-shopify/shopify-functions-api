/*----- Dependencies ------*/
const cartValidationModel = require("../models/cartValidation");

/*----- Exports ------*/
module.exports = {
  status,
  minMax
};

/*----- Functions ------*/
function status(req, res) {
  const cartValidation = cartValidationModel.status();
  res.json(cartValidation);
}

function minMax(req, res) {
  console.log(req.body);
  validationRes = cartValidationModel.minMaxValidate(req.body)
  if (validationRes.error){
    res.status(422).json(validationRes);
  } else {
    res.json(validationRes)
  }
}


