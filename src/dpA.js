// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  const N = parseInt(input[0], 10);
  const hList = input[1].split(' ').map(x => parseInt(x, 10));

  const costList = [...Array(N)].map(() => 0);
  costList[1] = costList[0] + Math.abs(hList[0] - hList[1]);

  for (let i = 2; i < N; i++) {
    costList[i] = Math.min(costList[i - 2] + Math.abs(hList[i - 2] - hList[i]), costList[i - 1] + Math.abs(hList[i - 1] - hList[i]));
  }

  console.log(costList[N - 1]);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
