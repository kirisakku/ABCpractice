// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  // 数値の配列を作る
  const numList0 = input[0].split(' ').map(x => parseInt(x, 10));
  const numList1 = input[1].split(' ').map(x => parseInt(x, 10));
  const numList2 = input[2].split(' ').map(x => parseInt(x, 10));
  // 二次元配列にする
  const cList = [
    numList0,
    numList1,
    numList2
  ];

  let flag = false;
  // b2-b1が一致するかどうか確認
  if ((cList[0][1] - cList[0][0] === cList[1][1] - cList[1][0]) && (cList[1][1] - cList[1][0] === cList[2][1] - cList[2][0])) {
    // b3-b2が一致するかどうか確認
    if ((cList[0][2] - cList[0][1] === cList[1][2] - cList[1][1]) && (cList[1][2] - cList[1][1] === cList[2][2] - cList[2][1])) {
      // a2-a1が一致するかどうか確認
      if ((cList[1][0] - cList[0][0] === cList[1][1] - cList[0][1]) && (cList[1][1] - cList[0][1] === cList[1][2] - cList[0][2])) {
        // a3-a2が一致するかどうか確認
        if ((cList[2][0] - cList[1][0] === cList[2][1] - cList[1][1]) && (cList[2][1] - cList[1][1] === cList[2][2] - cList[1][2])) {
          flag = true;
        }
      }
    }
  }

  if (flag) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
