// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  // 数値の配列を作る
  const N = parseInt(input[0], 10);
  const aList = input[1].split(' ').map(x => parseInt(x, 10));
  const Q = parseInt(input[2], 10);
  const queryList = [];
  for (let i = 0; i < Q; i++) {
    const data = input[3 + i].split(' ').map(x => parseInt(x, 10));
    queryList.push(data);
  }

  // 実行
  for (let i = 0; i < queryList.length; i++) {
    const [num, k, x] = queryList[i];
    if (num === 1) {
      aList[k - 1] = x;
    } else if (num === 2) {
      console.log(aList[k - 1]);
    }
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
