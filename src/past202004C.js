// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  // 数値の配列を作る
  const N = parseInt(input[0], 10);
  const SList = [];

  // Sのscan
  for (let i = 0; i < N; i++) {
    const list = input[1 + i].split('');
    SList.push(list);
  }

  // 山崩し
  for (let i = N - 2; i >= 0; i--) {
    for (let j = 1; j < 2 * N - 1; j++) {
      if (SList[i + 1][j - 1] === 'X' || SList[i + 1][j] === 'X' || SList[i + 1][j + 1] === 'X') {
        if (SList[i][j] === '#') {
          SList[i][j] = 'X';
        }
      }
    }
  }

  // 結果出力
  // 二次元配列→文字列配列に戻して出力
  for (let i = 0; i < N; i++) {
    const str = SList[i].join('');
    console.log(str);
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
