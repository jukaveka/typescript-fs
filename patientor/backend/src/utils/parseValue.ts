import { Gender } from "../types";
import {
  isString,
  isDate,
  isValidDateOfBirth,
  isValidSsn,
  isGender,
} from "./isType";

export const parseString = (input: unknown, description: string): string => {
  if (!input || !isString(input)) {
    throw new Error(
      `${description} is missing or not valid string. ${description}: ${input}`
    );
  }

  return input;
};

export const parseErrorMessage = (error: unknown): string => {
  let errorMessage = "Something went wrong.";

  if (error instanceof Error) {
    errorMessage += ` Error: ${error.message}`;
  }

  return errorMessage;
};

export const parseDateOfBirth = (dob: unknown): string => {
  if (!dob || !isString(dob) || !isDate(dob) || !isValidDateOfBirth(dob)) {
    throw new Error(
      `Date of birth is missing, not valid date or not valid date of birth. Date of birth: ${dob}`
    );
  }

  return dob;
};

export const parseSsn = (ssn: unknown): string => {
  if (!ssn || !isString(ssn) || !isValidSsn(ssn)) {
    throw new Error(
      `SSN is missing, not valid string or not valid SSN. SSN: ${ssn}`
    );
  }

  return ssn;
};

export const parseGender = (gender: unknown): Gender => {
  if (!gender || !isString(gender) || !isGender(gender)) {
    throw new Error(
      `Gender is missing, not valid string or not valid gender. Gender: ${gender}`
    );
  }

  return gender;
};
