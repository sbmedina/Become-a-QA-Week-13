import "jest";

let isNumber = jest.fn().mockReturnValue(true);
let isArray = jest.fn().mockReturnValue(true);
let isString = jest.fn().mockReturnValue(true);
let validateEmail = jest.fn().mockReturnValue(true);
let sum = jest.fn().mockReturnValue(24);
let multip = jest.fn().mockReturnValue(120);
let division = jest.fn().mockReturnValue(88);
let exponent = jest.fn().mockReturnValue(96);
let isSupportedFigure = jest.fn().mockReturnValue(true);
let arrayElementsAreObjectWithKey = jest.fn().mockReturnValue(true);
let sortArrayByKey = jest.fn().mockReturnValue([{ name: "Harvey", nickname: "Micky" }]);
let arrayIntersection = jest.fn().mockReturnValue(["Blue"]);
let getEvenNumbersFromArray = jest.fn().mockReturnValue("[8, 12, 4]");
let getOddNumbersFromArray = jest.fn().mockReturnValue("[5, 19, 17]");

const funcMock = jest.mock("./basicOperations.js", () => {
  return {
    isNumber,
    isArray,
    isString,
    validateEmail,
    sum,
    multip,
    division,
    exponent,
    isSupportedFigure,
    arrayElementsAreObjectWithKey,
    sortArrayByKey,
    arrayIntersection,
    getEvenNumbersFromArray,
    getOddNumbersFromArray,
  };
});

export default funcMock;
