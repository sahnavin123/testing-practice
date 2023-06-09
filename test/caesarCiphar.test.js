import caesarCipher from "../script/caesarCipher";

describe("caesarCipher", () => {
  it("shifts characters in the string correctly", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
    expect(caesarCipher("xyz", -1)).toBe("wxy");
    expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
  });
});
