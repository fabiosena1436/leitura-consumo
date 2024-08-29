const validateMeasureType = (type) => {
    const validTypes = ['WATER', 'GAS'];
    return validTypes.includes(type.toUpperCase());
  };
  
  const validateBase64 = (base64String) => {
    const base64Regex = /^data:image\/(png|jpg|jpeg);base64,/;
    return base64Regex.test(base64String);
  };
  
  module.exports = {
    validateMeasureType,
    validateBase64,
  };
  