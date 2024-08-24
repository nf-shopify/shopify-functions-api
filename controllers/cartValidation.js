/*----- Dependencies ------*/
const cartValidationModel = require("../models/cartValidation");

/*----- Exports ------*/
module.exports = {
  status,
  minMax,
  vipTag
};

/*----- Functions ------*/
function status(req, res) {
  const cartValidation = cartValidationModel.status();
  res.json(cartValidation);
}

function minMax(req, res) {
  validationRes = cartValidationModel.minMaxValidate(req.body)
  if (validationRes.error){
    res.status(422).json(validationRes);
  } else {
    res.json(validationRes)
  }
}

function vipTag(req, res) {
  validationRes = cartValidationModel.vipTagValidate(req.body)
  if (validationRes.error){
    res.status(422).json(validationRes);
  } else {
    res.json(validationRes)
  }
}


