describe('factorial', function() {

	it("returns 1 if 0 is entered", function() {
		expect(factorial(0)).to.equal(1);
	});

	it("returns 1 if 1 is entered", function() {
		expect(factorial(1)).to.equal(1);
	});

	it("returns 2 if 2 is entered", function() {
		expect(factorial(2)).to.equal(2);
	});

	it("returns 6 if 3 is entered", function() {
		expect(factorial(3)).to.equal(6);
	});

	it("returns 8247650592082470666723170306785496252186258551345437492922123134388955774976000000000000000 if 65 is entered", function() {
		expect(factorial(65)).to.equal(8247650592082470666723170306785496252186258551345437492922123134388955774976000000000000000);
	});

});
