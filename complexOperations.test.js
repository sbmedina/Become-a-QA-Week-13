import "jest";
import * as complexOperations from "./complexOperations";

describe("complexOperation - Unit Tests", () => {
  describe("checkEmail", () => {
    it("Test an empty email", () => {
      expect(complexOperations.checkEmail("")).toBe(
        "The email should be an string"
      );
    });
    it("Test spaces in email", () => {
      expect(complexOperations.checkEmail("  ")).toBe("The email is invalid");
    });
    it("Test email with numbers", () => {
      expect(complexOperations.checkEmail(4512)).toBe(
        "The email should be an string"
      );
    });
    it("Test valid email", () => {
      expect(complexOperations.checkEmail("radium@gmail.com")).toBe(
        "The email is valid"
      );
    });
    it("Test invalid email", () => {
      expect(complexOperations.checkEmail("radium*gmail.com")).toBe(
        "The email is invalid"
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
    it("Test strings as numbers", () => {
      expect(complexOperations.calculateArea("square", "hello", "one")).toBe(
        "number1 and number2 should be numbers"
      );
    });
    it("Test area for square", () => {
      expect(complexOperations.calculateArea("square", 5, 5)).toBe(25);
    });
    it("Test area for rectangle", () => {
      expect(complexOperations.calculateArea("rectangle", 5, 2)).toBe(10);
    });
    it("Test area for triangle", () => {
      expect(complexOperations.calculateArea("triangle", 5, 10)).toBe(25);
    });
    it("Test area for circle", () => {
      expect(complexOperations.calculateArea("circle", 5)).toBe(
        78.53981633974483
      );
    });
  });

  describe("sumGratherThan", () => {
    it("Test sum strings", () => {
      expect(complexOperations.sumGratherThan("one", "two", "three")).toBe(
        "The params should be numbers"
      );
    });
    it("Test sum with a number as string", () => {
      expect(complexOperations.sumGratherThan(1, 2, "one")).toBe(
        "The params should be numbers"
      );
    });
    it("Test sum of first numbers grater than the third", () => {
      expect(complexOperations.sumGratherThan(10, 2, 3)).toBe(
        "12 is grather than 3"
      );
    });
    it("Test sum of first numbers less than the third", () => {
      expect(complexOperations.sumGratherThan(2, 3, 10)).toBe(
        "5 is less than 10"
      );
    });
  });

  describe("intersectionBetweenArrays", () => {
    it("Test intersection with no arrays", () => {
      expect(complexOperations.intersectionBetweenArrays("Carl", 2)).toEqual(
        "The params should be arrays"
      );
    });
    it("Test intersection with array and a string", () => {
      expect(
        complexOperations.intersectionBetweenArrays(["Carl", "John"], "table")
      ).toEqual("The params should be arrays");
    });
    it("Test intersection with no matching elements", () => {
      expect(
        complexOperations.intersectionBetweenArrays(
          ["Carl", "John"],
          ["table", "chair"]
        )
      ).toEqual("There are not matching elements");
    });
    it("Test intersection between arrays", () => {
      expect(
        complexOperations.intersectionBetweenArrays(
          ["Carl", "John"],
          ["Carl", "Tom"]
        )
      ).toEqual(["Carl"]);
    });
  });

  describe("sortArrayOfObjectsByKey", () => {
    it("Test sort with first param as string", () => {
      expect(complexOperations.sortArrayOfObjectsByKey("Carl", "John")).toEqual(
        "The first param should be an array"
      );
    });
    it("Test sort with second param as a number", () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
          [{ name: "Carl" }, { name: "John" }],
          2
        )
      ).toEqual("The second param should be an string");
    });
    it("Test sort with objects without key", () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
          [{ nickname: "Tiger" }, { name: "Carl" }, { nickname: "Tiny" }],
          "nickname"
        )
      ).toEqual(
        "Some elements in the array does not have the nickname property"
      );
    });
    it("Test sort array of objects by key", () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
          [{ name: "Carl" }, { name: "John" }, { name: "Tom" }],
          "name"
        )
      ).toEqual([{ name: "Carl" }, { name: "John" }, { name: "Tom" }]);
    });
  });

  describe("numberOfOddAndEvenNumbers", () => {
    it("Test with params as numbers", () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(8)).toEqual(
        "The param should be an array"
      );
    });
    it("Test array with string", () => {
      expect(
        complexOperations.numberOfOddAndEvenNumbers([2, 2, 7, "one"])
      ).toEqual("The array should have only numbers");
    });
    it("Test number of odd and even numbers", () => {
      expect(
        complexOperations.numberOfOddAndEvenNumbers([2, 2, 7, 8, 9, 10])
      ).toEqual({ even: 4, odd: 2 });
    });
  });
});
