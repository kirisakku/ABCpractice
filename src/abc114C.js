// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');

  const N = parseInt(input[0], 10);
  let answer = 0;

  const solver = (n, use3, use5, use7) => {
    if (n > N) {
      return;
    }

    // 3, 5, 7全てが揃っていたら答えに加算
    if (use3 && use5 && use7) {
      answer = answer + 1;
    }

    // 末尾に3, 5, 7を付けた数を再帰的に調べる
    solver(10 * n + 3, true, use5, use7);
    solver(10 * n + 5, use3, true, use7);
    solver(10 * n + 7, use3, use5, true);
  };

  solver(0, false, false, false);

  console.log(answer);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
