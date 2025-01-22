export const weiToEth = (bigIntNumber: bigint): string => {
  // Convert BigInt to string
  const numberString = bigIntNumber.toString();

  const decimalPointsInEth = 18;

  // Extract integer part and decimal part
  const integerPart = numberString.substring(
    0,
    numberString.length - decimalPointsInEth
  );

  const decimalPart = numberString.slice(-decimalPointsInEth);

  // Insert decimal point
  const decimalString =
    (integerPart ? integerPart : "0") +
    "." +
    decimalPart.padStart(decimalPointsInEth, "0");

  // Add negative sign if necessary
  return decimalString.slice(0, -14);
};
