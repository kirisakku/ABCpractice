// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  // 数値の配列を作る
  const [A, B] = input[0].split(' ').map(x => parseInt(x, 10));

  console.log(A ** B);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
