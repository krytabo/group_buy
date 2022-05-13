export function numberToCurrencyNo(value) {
  if (!value) return 0;
  // 讀取整數
  const intPart = Math.trunc(value);
  // 整數部分增加,
  const intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  // 定義小數點
  let floatPart = "";
  // 將數值擷取為整數和小數點
  const valueArray = value.toString().split(".");
  if (valueArray.length === 2) {
    // 有小數點時
    floatPart = valueArray[1].toString(); // 取得小數點
    return intPartFormat + "." + floatPart;
  }
  return intPartFormat + floatPart;
}
