// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  // 数値の配列を作る
  const numList0 = input[0].split(' ').map(x => parseInt(x, 10));
  const numList1 = input[1].split(' ').map(x => parseInt(x, 10));
  const numList2 = input[2].split(' ').map(x => parseInt(x, 10));
  const N = parseInt(input[3], 10);

  const bingo = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ];

  for (let i = 0; i < N; i++) {
    const b = parseInt(input[4 + i], 10);
    const index0 = numList0.findIndex((elem) => elem === b);
    if (index0 !== -1) {
      bingo[0][index0] = true;
    }
    const index1 = numList1.findIndex((elem) => elem === b);
    if (index1 !== -1) {
      bingo[1][index1] = true;
    }
    const index2 = numList2.findIndex((elem) => elem === b);
    if (index2 !== -1) {
      bingo[2][index2] = true;
    }
  }

  // 判定
  let flag = false;
  for (let i = 0; i < 3; i++) {
    // 横が揃うケース
    if (bingo[i][0] && bingo[i][1] && bingo[i][2]) {
      flag = true;
    }
    // 縦が揃うケース
    if (bingo[0][i] && bingo[1][i] && bingo[2][i]) {
      flag = true;
    }
  }
  // 斜め判定
  if ((bingo[0][0] && bingo[1][1] && bingo[2][2]) || (bingo[0][2] && bingo[1][1] && bingo[2][0])) {
    flag = true;
  }

  if (flag) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
