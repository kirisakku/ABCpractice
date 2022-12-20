// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  // 数値の配列を作る
  const N = parseInt(input[0], 10);
  const S = input[1].split('');

  let flag = true;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '"') {
      flag = !flag;
    } else if (S[i] === ',') {
      if (flag) {
        S[i] = '.';
      }
    }
  }

  const result = S.join('');

  console.log(result);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
