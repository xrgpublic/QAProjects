function ConvertHandler() {

  this.getNum = function(input) {
    let result;
    input = input.toString();
    //For loop goes until it finds letter.  Then takes front half of string
    for (let i = 0; i < input.length; i++) {
      if (input.charAt(i).match(/[a-z]/i)) {
        //THIS IS LETTER
        result = input.substring(0, i);
        if(i == 0){
          result = '1';
        }
        i = input.length //ends loop
      }
    }
    //Check for fraction
    let isFraction = result.includes('/'); //checks for fraction
    if(isFraction){
      let divisorPlace;
      for (let i=0; i < result.length; i++){
        if(result.charAt(i) === '/'){
          divisorPlace = i
        }
      }
      //create fraction
      let numerator = result.substring(0,divisorPlace)
      let denominator = result.substring(divisorPlace+1)
      result = (numerator/denominator)
      
    }
    //Makes sure result is number
    if(isNaN(result)){
        return 'invalid number' //return error
    }else{
      result = parseFloat(result)
    }
    return result;
  };

  this.getUnit = function(input) {
    let result;
    input = input.toString();
    //For loop goes until it finds letter.  Then takes back half of string
    for (let i = 0; i < input.length; i++) {
      if (input.charAt(i).match(/[a-z]/i)) {
        //THIS IS LETTER
        result = input.substring(i)
        i = input.length //ends loop
      }
    }
    switch (result.toLowerCase()) {
      case 'gal':
        return 'gal'
      case 'l':
        return 'L'
      case 'mi':
        return 'mi'
      case 'km':
        return 'km'
      case 'lbs':
        return 'lbs'
      case 'kg':
        return 'kg'
      default:
        return 'invalid unit' //return error
    }
    
  };

  this.getReturnUnit = function(initUnit) {
    //Set up switch
    switch (initUnit) {
      case 'gal':
        return 'L'
      case 'L':
        return 'gal'
      case 'l':
        return 'gal'
      case 'mi':
        return 'km'
      case 'km':
        return 'mi'
      case 'lbs':
        return 'kg'
      case 'kg':
        return 'lbs'
      default:
        return 'invalid unit' //return error
    }
  };

  this.spellOutUnit = function(unit) {
    //set up switch
    switch (unit) {
      case 'gal':
        return 'gallons'
      case 'L':
        return 'liters'
      case 'mi':
        return 'miles'
      case 'km':
        return 'kilometers'
      case 'lbs':
        return 'pounds'
      case 'kg':
        return 'kilograms'
      default:
        return 'invalid unit' //return error
    }
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    //set up switch
    switch (initUnit) {
      case 'gal':
        return (initNum * galToL)
      case 'L':
        return (initNum / galToL)
      case 'l':
       return (initNum / galToL)
      case 'mi':
        return (initNum * miToKm)
      case 'km':
        return (initNum / miToKm)
      case 'lbs':
        return (initNum * lbsToKg)
      case 'kg':
        return (initNum / lbsToKg)
      default:
        return 'invalid unit' //return error
    }
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`
  };

}

module.exports = ConvertHandler;
