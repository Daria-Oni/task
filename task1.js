function sum(fisrtArgument, secondArgument) {
  let convertedFirstArgument = Number(fisrtArgument);
  let convertedSecondArgument = Number(secondArgument);

  if (
    typeof convertedSecondArgument === "number" &&
    convertedSecondArgument % 5 == 0 &&
    convertedSecondArgument % 8 == 0 &&
    convertedSecondArgument % 11 == 0
  ) {
    convertedSecondArgument = convertedSecondArgument * 2;
  }
  if (
    typeof convertedFirstArgument === "number" &&
    convertedFirstArgument % 5 == 0 &&
    convertedFirstArgument % 8 == 0 &&
    convertedFirstArgument % 11 == 0
  ) {
    convertedFirstArgument = convertedFirstArgument * 2;
  }
  return convertedFirstArgument + convertedSecondArgument;
}
