'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');



module.exports = function(app) {

  let convertHandler = new ConvertHandler();
    app.route('/api/convert').get(function(req, res) {
    let initNum = convertHandler.getNum(req.query.input);  
    let initUnit = convertHandler.getUnit(req.query.input);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let spelledInitnUnit = convertHandler.spellOutUnit(initUnit);
    let spelledReturnUnit = convertHandler.spellOutUnit(returnUnit);
    let returnNum = convertHandler.convert(initNum, initUnit);   
    let convertToString;
    if(initNum === 'invalid number' && initUnit === 'invalid unit'){
      res.send('invalid number and unit');
    }
    else if(initNum === 'invalid number'){
      res.send('invalid number');
    }else if(initUnit === 'invalid unit'){
      res.send('invalid unit');
    }else{
      initNum = Math.round(initNum * 100000) / 100000;
      returnNum = Math.round(returnNum * 100000) / 100000;
      convertToString = convertHandler.getString(initNum, spelledInitnUnit, returnNum, spelledReturnUnit);
      res.json({initNum, initUnit, returnNum, returnUnit, string: convertToString});
    }
  });
};
