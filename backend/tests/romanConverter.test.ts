import { toRoman } from "../src/romanConverter";

describe("Roman numeral conversion", () => {
  it("should convert 1 to I", () => {
    expect(toRoman(1)).toBe("I");
  });

  it("should convert 3999 to MMMCMXCIX", () => {
    expect(toRoman(3999)).toBe("MMMCMXCIX");
  });

  it("should convert 44 to XLIV", () => {
    expect(toRoman(44)).toBe("XLIV");
  });

  it("should convert 0 to an empty string", () => {
    expect(toRoman(0)).toBe("");
  });
});