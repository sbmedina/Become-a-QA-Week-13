import funcMock from "./operations.mock";
import * as complexOperations from "./complexOperations.js";

describe("complexOperation - Unit Tests", () => {
  describe("checkEmail", () => {
    it("Test an empty email", () => {
      expect(complexOperations.checkEmail("")).toBe(
        "The email should be an string"
      );
    });
    it("Test spaces in email", () => {
      expect(complexOperations.checkEmail("  ")).toBe("The email is valid");
    });
    it("Test email with numbers", () => {
      expect(complexOperations.checkEmail(4512)).toBe("The email is valid");
    });
    it("Test valid email", () => {
      expect(complexOperations.checkEmail("radium@gmail.com")).toBe(
        "The email is valid"
      );
    });
    it("Test invalid email", () => {
      expect(complexOperations.checkEmail("radium*gmail.com")).toBe(
        "The email is valid"
      );
    });
  });

  describe("calculateArea", () => {
    it("Test invalid figure", () => {
      expect(complexOperations.calculateArea("figure", 1, 2)).toBe(
        "figure is not supported"
      );
    });
    it("Test figure not supported", () => {
      expect(complexOperations.calculateArea("cube", 5, 2)).toBe(
        "cube is not supported"
      );
    });
    it("Test area for square", () => {
      expect(complexOperations.calculateArea("square")).toBe(120);
    });
    it("Test area for rectangle", () => {
      expect(complexOperations.calculateArea("rectangle")).toBe(120);
    });
    it("Test area for triangle", () => {
      expect(complexOperations.calculateArea("triangle")).toBe(88);
    });
    it("Test area for circle", () => {
      expect(complexOperations.calculateArea("circle")).toBe(
        301.59289474462014
      );
    });
  });

  describe("sumGratherThan", () => {
    it("Test sum of first numbers grater than the third", () => {
      expect(complexOperations.sumGratherThan(10, 14, 3)).toBe(
        "24 is grather than 3"
      );
    });
    it("Test sum of first numbers grater than the third", () => {
      expect(complexOperations.sumGratherThan(10, 14, 10)).toBe(
        "24 is grather than 10"
      );
    });
  });

  describe("intersectionBetweenArrays", () => {
    it("Test intersection between arrays", () => {
      expect(
        complexOperations.intersectionBetweenArrays(
          ["Blue", "Red"],
          ["Blue", "Green"]
        )
      ).toEqual(["Blue"]);
    });
  });

  describe("sortArrayOfObjectsByKey", () => {
    it("Test sort with first param as string", () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey("Carl", "John")
      ).toEqual([{ name: "Harvey", nickname: "Micky" }]);
    });
    it("Test sort with second param as a number", () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
          [{ name: "Carl" }, { name: "John" }],
          2
        )
      ).toEqual([{ name: "Harvey", nickname: "Micky" }]);
    });
    it("Test sort with objects without key", () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
          [{ nickname: "Tiger" }, { name: "Carl" }, { nickname: "Tiny" }],
          "nickname"
        )
      ).toEqual([{ name: "Harvey", nickname: "Micky" }]);
    });
  });

  describe("numberOfOddAndEvenNumbers", () => {
    it("Test with params as numbers", () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(8)).toEqual(
        "The param should be an array"
      );
    });
    it("Test number of odd and even numbers", () => {
      expect(
        complexOperations.numberOfOddAndEvenNumbers([2, 2, 7, 8, 9, 10])
      ).toEqual({ even: 10, odd: 11 });
    });
  });
});
