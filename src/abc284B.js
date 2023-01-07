// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  // 数値の配列を作る
  const T = parseInt(input[0], 10);

  for (let i = 0; i < T; i++) {
    // NとAのscan
    const N = parseInt(input[1 + 2 * i], 10);
    const A = input[1 + 2 * i + 1].split(' ').map(x => parseInt(x, 10));
    // filter
    const kisu = A.filter((elem) => elem % 2 === 1);
    console.log(kisu.length);
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
