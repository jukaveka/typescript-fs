import { isNotNumber } from "./isNotNumber";

export const isArrayOfNumbers = (arr: unknown[]): boolean => {
  let correctTypes = true;

  arr.forEach((value: unknown) => {
    if (isNotNumber(value)) {
      correctTypes = false;
    }
  });

  return correctTypes;
};
