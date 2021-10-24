import * as error from "./error";

console.log(error);

export const throwMethodMissingError = (methodName = "") => {
  console.error(`${methodName} is missing`);
};
