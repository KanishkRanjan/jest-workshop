const { calculateFinalAmount } = require("../src/pricing");

describe("calculateFinalAmount", () => {
    test("should return the correct amount without any coupon", () => {
        expect(calculateFinalAmount(100)).toBe(100);
    });

    test("should cap SAVE10 discount at 100", () => {
        expect(calculateFinalAmount(2000, "SAVE10")).toBe(1800);
    });

    test("should apply flat 50 discount with FLAT50", () => {
        expect(calculateFinalAmount(200, "FLAT50")).toBe(150);
    });


    test("should throw error for invalid coupon code", () => {
        expect(() => calculateFinalAmount(100, "INVALID")).toThrow("Invalid Coupon");
    });

    test("should throw error for invalid subtotal (negative or non-number)", () => {
        expect(() => calculateFinalAmount(-10)).toThrow("Invalid subtotal");
    });

    test("should handle coupon codes case-insensitively", () => {
        expect(calculateFinalAmount(100, "save10")).toBe(90);
    });
});
