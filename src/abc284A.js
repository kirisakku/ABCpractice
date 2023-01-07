// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');

  for (let i = input.length - 2; i >= 1; i--) {
    console.log(input[i]);
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
