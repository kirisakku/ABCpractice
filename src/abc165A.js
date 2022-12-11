// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');

  const N = parseInt(input[0], 10);
  const [A, B] = input[1].split(' ').map(x => parseInt(x, 10));

  // 倍数のリストを作る
  const baisu = [...Array(1000)].map((_, i) => i + 1);
  const filteredList = baisu.filter((elem) => elem % N === 0);
  if (filteredList.some((elem) => A <= elem && elem <= B)) {
    console.log('OK');
  } else {
    console.log('NG');
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
