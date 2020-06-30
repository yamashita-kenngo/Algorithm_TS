/*
二分探査を実装する
*/

// 間抜けな探し方

/*
回答者
入力値を正解と比較し、大きすぎる、小さすぎる、正解のいずれかを返答する
*/

function toAnswer(input: number): string | undefined {
  const responseSets: string[] = ["正解", "大きい", "小さい"];
  const correctNum: number = 1;
  let result: string;
  if (input === correctNum) {
    result = responseSets[0];
    return result;
  }
  if (input > correctNum) {
    result = responseSets[1];
    return result;
  }
  if (input < correctNum) {
    result = responseSets[2];
    return result;
  }
}

console.log(toAnswer(0));
