/*
10進数、2進数、8進数のいずれで表現しても回文数となる数のうち、10進数の10以上で最小の地を求める。
*/

function palindromeNum(inputNum: number, setParam: Array<number>): boolean[] {
  const resultFlag = setParam.map((checkRadix) =>
    checkPalindromeOrNot(chnageNumtoString(inputNum, checkRadix))
  );
  return resultFlag;
}

function chnageNumtoString(inputNum: number, radix: number): string {
  // 入力値を指定の基数に基づいて文字列に変換する
  const targetStr = inputNum.toString(radix);
  return targetStr;
}

function checkPalindromeOrNot(inputStr: string): boolean {
  // 入力値が回文か確認する
  const reverseString = Array.from(inputStr).reverse().join("");
  return inputStr === reverseString;
}

let flag = true;
let checked_Num = 10;
while (flag) {
  flag = palindromeNum(checked_Num, [10, 2, 8]).includes(false);
  checked_Num++;
}

console.log(checked_Num - 1);
