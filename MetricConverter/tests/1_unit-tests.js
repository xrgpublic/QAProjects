const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Check Valid Input', function() {
    // #1
    test('Testing whole number input', function() {
      assert.typeOf(convertHandler.getNum('5km'), 'number', 'output is number');
    });
    test('Testing decimal input', function() {
      assert.typeOf(convertHandler.getNum('3.1mi'), 'number', 'output is number');
    });
    test('Testing fractional input', function() {
      assert.typeOf(convertHandler.getNum('4/3kg'), 'number', 'output is number');
    });
    test('Testing decimal fraction input', function() {
      assert.typeOf(convertHandler.getNum('7.3/4lbs'), 'number', 'output is number');
    });
    test('Testing default with no numerical input', function() {
      assert.typeOf(convertHandler.getNum('L'), 'number', 'output is number');
    });
    test('Testing double fraction input', function() {
      assert.typeOf(convertHandler.getNum('5/4/3km'), 'string', 'output is not a number');
    });
    

    test('Testing input unit gal', function() {
      assert.strictEqual(convertHandler.getUnit('gal'), 'gal', 'output is unit');
    });
    test('Testing input unit L', function() {
      assert.strictEqual(convertHandler.getUnit('L'), 'L', 'output is unit');
    });
    test('Testing input unit mi', function() {
      assert.strictEqual(convertHandler.getUnit('mi'), 'mi', 'output is unit');
    });
    test('Testing input unit km', function() {
      assert.strictEqual(convertHandler.getUnit('km'), 'km', 'output is unit');
    });
    test('Testing input unit lbs', function() {
      assert.strictEqual(convertHandler.getUnit('lbs'), 'lbs', 'output is unit');
    });
    test('Testing input unit kg', function() {
      assert.strictEqual(convertHandler.getUnit('kg'), 'kg', 'output is unit');
    });
    test('Testing incorrect input unit min', function() {
      assert.strictEqual(convertHandler.getUnit('min'), 'invalid unit', 'output is invalid input');
    });

    
    test('Testing spelled out unit gallons', function() {
      assert.strictEqual(convertHandler.spellOutUnit('gal'), 'gallons', 'output is unit');
    });
    test('Testing spelled out unit Liters', function() {
      assert.strictEqual(convertHandler.spellOutUnit('L'), 'liters', 'output is unit');
    });
    test('Testing spelled out unit miles', function() {
      assert.strictEqual(convertHandler.spellOutUnit('mi'), 'miles', 'output is unit');
    });
    test('Testing spelled out unit kilometers', function() {
      assert.strictEqual(convertHandler.spellOutUnit('km'), 'kilometers', 'output is unit');
    });
    test('Testing spelled out unit pounds', function() {
      assert.strictEqual(convertHandler.spellOutUnit('lbs'), 'pounds', 'output is unit');
    });
    test('Testing spelled out unit kilograms', function() {
      assert.strictEqual(convertHandler.spellOutUnit('kg'), 'kilograms', 'output is unit');
    });

    
    test('Testing return unit for gal', function() {
      assert.strictEqual(convertHandler.getReturnUnit('gal'), 'L', 'input L is converted to gal');
    });
    test('Testing return unit for L', function() {
      assert.strictEqual(convertHandler.getReturnUnit('L'), 'gal', 'input gal is coverted to L');
    });
    test('Testing return unit for mi', function() {
      assert.strictEqual(convertHandler.getReturnUnit('mi'), 'km', 'input mi is coverted to km');
    });
    test('Testing return unit for km', function() {
      assert.strictEqual(convertHandler.getReturnUnit('km'), 'mi', 'input km is coverted to mi');
    });
    test('Testing return unit for lbs', function() {
      assert.strictEqual(convertHandler.getReturnUnit('lbs'), 'kg', 'input lbs is coverted to kg');
    });
    test('Testing return unit for kg', function() {
      assert.strictEqual(convertHandler.getReturnUnit('kg'), 'lbs', 'input kg is coverted to lbs');
    });
    test('Testing return unit for invalid unit', function() {
      assert.strictEqual(convertHandler.getReturnUnit('m'), 'invalid unit', 'input is invalid');
    });
  });
});
//=====================================================================

