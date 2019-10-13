const { isValidTableName, isValidNumRows, isValidFields, isValidAttributes } = require("./helpers");

describe("isValidTableName", () => {
  it("number returns false", () => {
    expect(isValidTableName(123)).toBe(false);
  });
  it("string returns true", () => {
    expect(isValidTableName("users")).toBe(true);
  });
});

describe("isValidNumRows", () => {
  it("is not an integer", () => {
    expect(isValidNumRows(1.01)).toBe(false);
    expect(isValidNumRows(1.23)).toBe(false);
    expect(isValidNumRows("hello")).toBe(false);
    expect(isValidNumRows()).toBe(false);
  });
  it("is an integer", () => {
    expect(isValidNumRows(1.0)).toBe(true);
    expect(isValidNumRows(123)).toBe(true);
  });
  it("is equal to zero", () => {
    expect(isValidNumRows(0)).toBe(false);
  });
});

describe("isValidFields", () => {
  it("is an array of strings", () => {
    expect(isValidFields(["hello", "goodbye"])).toBe(true);
    expect(isValidFields(["test"])).toBe(true);
  });
  it("is not an array of strings", () => {
    expect(isValidFields([1, 2])).toBe(false);
    expect(isValidFields([900, "huh"])).toBe(false);
  });
  it("is not an array", () => {
    expect(isValidFields({ name: "test" })).toBe(false);
    expect(isValidFields(123)).toBe(false);
  });
});

describe("isValidAttributes", () => {
  it("valid faker attribute/subattributes", () => {
    expect(isValidAttributes(["name.firstName", "name.lastName"])).toBe(true);
  });
  it("valid faker attribute", () => {
    expect(isValidAttributes(["name.fakeFirstName", "name.fakeLastName"])).toBe(false);
  });
  it("valid faker subattributes", () => {
    expect(() => {
      isValidAttributes(["fakeAttr.firstName", "fakeAttr.lastName"]).toThrow();
    });
  });
  it("not valid attributes", () => {
    expect(() => {
      isValidAttributes(["fakeAttr.fakeFirstName"]).toThrow();
    });
  });
  it("is not an array", () => {
    expect(isValidAttributes({ test: "name" })).toBe(false);
  });
});
