/*
10進数、2進数、8進数のいずれで表現しても回文数となる数のうち、10進数の10以上で最小の地を求める。
*/

function Palindrome_Num(inputNum: number, setParam: Array<number>):boolean[]{
    const result_Flag = setParam.map(check_radix => Check_Palindrome_OrNot(Chnage_Num_to_String(inputNum, check_radix)));
    return result_Flag;
}

function Chnage_Num_to_String(inputNum: number, radix: number): string {
    // 入力値を指定の基数に基づいて文字列に変換する
    const targetStr = inputNum.toString(radix);
    return targetStr;
}

function Check_Palindrome_OrNot(inputStr: string): boolean {
    // 入力値が回文か確認する
    const reverse_string = Array.from(inputStr).reverse().join('');
    return inputStr === reverse_string;
}

let flag = true;
let checked_Num = 10;
while(flag){
  flag = Palindrome_Num(checked_Num, [10, 2, 8]).includes(false);
  checked_Num ++;
} 

console.log(checked_Num -1);