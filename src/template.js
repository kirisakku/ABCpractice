// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  // 数値の配列を作る
  //    const numList0 = input[0].split(' ').map(x => parseInt(x, 10));
  const S = input[0].split(' ')[0];
  const T = input[1].split(' ')[0];

  let count = 0;
  for (let i = 0; i < 3; i++) {
    const char1 = S.charAt(i);
    const char2 = T.charAt(i);
    if (char1 === char2) {
      count++;
    }
  }

  console.log(count);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
