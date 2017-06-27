describe('test', function() {

	var BalancedParentheses = require('../src/BalancedParentheses.js');

	beforeEach(function() {
	    balancedParentheses = new BalancedParentheses();
  	});

	it('should work', function() {
		expect(balancedParentheses).toBeDefined();

		expect(balancedParentheses.getName()).toEqual("bob");
	});
});