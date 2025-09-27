import { Gender } from "../types";

export const isString = (input: unknown): input is string => {
  return typeof input === "string" || input instanceof String;
};

export const isDate = (input: string): boolean => {
  return Boolean(Date.parse(input));
};

export const isValidDateOfBirth = (dob: string): boolean => {
  return Date.now() > Date.parse(dob);
};

export const isValidSsn = (ssn: string): boolean => {
  // const validSsnRegex = /^(\d{6}[-+A-E]\d{3}\S{1})$/i;

  const validSsnDay = /^(?:([0][1-9])|([1-2][0-9])|([3][0-1]))$/;
  const validSsnMonth = /^(?:([0][1-9]|([1][0-2])))$/;
  const validSsnYear = /^\d{2}$/;

  const validSsnSeparator = /^[-+ABCDEFUVWXY]$/;

  const validSsnRunningNumber =
    /^(?:([0][0][2-9])|([0][1-9][0-9])|([1-7][0-9][0-9])|([8][0-8][0-9]))$/;

  const validSsnCheckCharacter = /^[0-9ABCDFHJKLMNPRSTUVWXY]$/;

  return (
    validSsnDay.test(ssn.substring(0, 2)) &&
    validSsnMonth.test(ssn.substring(2, 4)) &&
    validSsnYear.test(ssn.substring(4, 6)) &&
    validSsnSeparator.test(ssn.substring(6, 7)) &&
    validSsnRunningNumber.test(ssn.substring(7, 10)) &&
    validSsnCheckCharacter.test(ssn.substring(10, 11))
  );
};

export const isGender = (input: string): input is Gender => {
  return Object.values(Gender)
    .map((value) => value.toString())
    .includes(input);
};
