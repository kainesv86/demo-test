const lib = require("../lib");

describe("absolute", () => {
        it("should return a positive number if input is positive", () => {
                const result = lib.absolute(1);
                expect(result).toBe(1);
        });

        it("should return a positive number if input is negative", () => {
                const result = lib.absolute(-1);
                expect(result).toBe(1);
        });

        it("should return 0 if input is 0", () => {
                const result = lib.absolute(0);
                expect(result).toBe(0);
        });
});

describe("greet", () => {
        it("Should return the greeting message", () => {
                const result = lib.greet("Kaine");
                expect(result).toMatch(/Kaine/);
                expect(result).toContain("Kaine");
        });
});

describe("getCurrencies", () => {
        it("Should return supported currencies", () => {
                const result = lib.getCurrencies();

                // To general
                expect(result).toBeDefined();
                expect(result).not.toBeNull();

                // Too specific
                expect(result[0]).toBe("USD");
                expect(result[1]).toBe("AUD");
                expect(result[2]).toBe("EUR");
                expect(result.length).toBe(3);

                //Proper way
                expect(result).toContain("USD");
                expect(result).toContain("AUD");
                expect(result).toContain("EUR");

                // Ideal way
                expect(result).toEqual(expect.arrayContaining(["EUR", "USD", "AUD"]));
        });
});

describe("getProduct", () => {
        it("Should return the product with the given id", () => {
                const result = lib.getProduct(1);

                // Have the same properties and values
                expect(result).toEqual({ id: 1, price: 10 });

                // Just need to contain properties and values
                expect(result).toMatchObject({ id: 1, price: 10 });

                //---------------------------------------//
                expect(result).toHaveProperty("id", "1");
        });
});
