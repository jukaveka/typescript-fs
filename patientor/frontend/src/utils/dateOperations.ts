import { ISODate, ISODateSchema } from "../types/DateTypes";

export const getCurrentDateISO = (): ISODate => {
  return new Date().toISOString().slice(0, 10);
};

export const entryDateIsValid = (date: string): boolean => {
  const currentDate = getCurrentDateISO();

  return currentDate >= ISODateSchema.parse(date);
};

export const dateOrderIsValid = (
  earlierDate: string,
  laterDate: string
): boolean => {
  return ISODateSchema.parse(earlierDate) <= ISODateSchema.parse(laterDate);
};
