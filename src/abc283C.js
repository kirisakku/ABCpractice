// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');

  const S = input[0].split('');

  let isZero = false;
  let counter = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '0') {
      if (isZero) {
        isZero = false;
      } else {
        isZero = true;
        counter++;
      }
    } else {
      isZero = false;
      counter++;
    }
  }

  console.log(counter);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
