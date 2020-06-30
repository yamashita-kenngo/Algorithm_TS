/*
二分探査を実装する
*/

/*
間抜けな探し方を実装する
1から順に入力し、正解が戻り値となるまで続ける
*/

function stupidSearch() {
  let returnFlag = true;
  let inputNum = 0;
  while (returnFlag) {
    //toAnswerの戻り値が正解の場合にreturnFlagをfalseに変更する
    if (toAnswer(inputNum) === "正解") {
      returnFlag = false;
    } else {
      inputNum++;
    }
  }
  return inputNum;
}

/*
回答者
入力値を正解と比較し、大きすぎる、小さすぎる、正解のいずれかを返答する
*/

function toAnswer(input: number): string | undefined {
  const responseSets: string[] = ["正解", "大きい", "小さい"];
  const correctNum: number = 10;
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

console.log(stupidSearch());
