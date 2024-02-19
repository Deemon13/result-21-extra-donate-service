export function formatDonate(value) {
  let donate;
  const valueStr = value.toString();

  if (valueStr.includes(".") || valueStr.includes(".")) {
    donate = Number.parseFloat(Number.parseFloat(valueStr).toFixed(2));
  } else {
    donate = value;
  }

  return donate;
}
