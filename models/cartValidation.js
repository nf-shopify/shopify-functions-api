/*----- Exports ------*/
module.exports = {
    status,
    minMaxValidate
  };

  function status() {
    return {endpointStatus: "Online"}
  }

  function minMaxValidate(res){
    return {res}
  }
