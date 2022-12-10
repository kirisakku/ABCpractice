// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');

  const N = parseInt(input[0], 10);
  const [A, B] = input[1].split(' ').map(x => parseInt(x, 10));

  if ((B - A + 1) / N >= 1) {
    console.log('OK');
  } else {
    console.log('NG');
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
