describe('checkTriangle', function() {

	it("returns equilateral if all 3 sides are the same", function() {
		expect(checkTriangle(3,3,3)).to.equal("equilateral");
	});

	it("return isosceles if exactly two sides are equal", function() {
		expect(checkTriangle(4,3,3)).to.equal("isosceles");
	});

	it("return scalene if no sides are the same", function() {
		expect(checkTriangle(4,3,2)).to.equal("scalene");
	});

	it("one side cannot be greater than the sum of the other two", function() {
		expect(checkTriangle(10,3,2)).to.equal("not a triangle");
	});

});
