// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  // 数値の配列を作る

  //    const numList0 = input[0].split(' ').map(x => parseInt(x, 10));
  const K = parseInt(input[0], 10);
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const result = str.substring(0, K);

  console.log(result);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
