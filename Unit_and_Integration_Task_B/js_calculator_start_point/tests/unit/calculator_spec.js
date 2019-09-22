var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add together two numbers',function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('can subtract a number from another', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('can multiply two numbers', function(){
    calculator.previousTotal = 5;
    calculator.multiply(3);
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('can divide two numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('should be able to concatenate multiple number button clicks', function(){
    calculator.numberClick(8);
    calculator.numberClick(4);
    calculator.numberClick(2);
    assert.strictEqual(calculator.runningTotal, 842);
  })

  it('should be able to chain multiple operators together', function(){
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.operatorClick('-');
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('should be able to clear the running total without affecting the calculation', function(){
    calculator.runningTotal = 5;
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(6);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 8);
  })

});
