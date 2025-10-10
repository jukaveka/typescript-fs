export const assertNever = (value: never): never => {
  throw new Error(
    `Member of type not handled properly. Type: ${JSON.stringify(value)}`
  );
};
