describe('encrypt', function() {

	it("returns a single alpha character if a single char is entered", function() {
		expect(encrypt("a")).to.equal("a");
  });

	it("returns a single character if user enters weird shit", function() {
		expect(encrypt("-a%$  ))-")).to.equal("a");
	});

	it("returns a single character if user enters weird shit", function() {
		expect(encrypt("-a%$  ))-")).to.equal("a");
	});

	it("returns 2 alpha characters if string with 2 chars is entered with spaces and punctuation",function() {
		expect(encrypt(" * a >> a")).to.equal("aa");
	})


});
