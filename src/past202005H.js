// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  // 数値の配列を作る
  const [N, L] = input[0].split(' ').map(x => parseInt(x, 10));
  const xList = input[1].split(' ').map(x => parseInt(x, 10));
  const [T1, T2, T3] = input[2].split(' ').map(x => parseInt(x, 10));

  // ハードルがある場所をtrueとして持つ配列
  const H = [...Array(N)].map(() => false);
  for (let i = 0; i < N; i++) {
    const index = xList[i];
    H[index] = true;
  }

  const cost = [...Array(L + 1)].map(() => 100000000);
  cost[0] = 0;

  // 各ノードのコストを計算
  for (let i = 1; i < L + 1; i++) {
    // 行動1
    cost[i] = Math.min(cost[i], cost[i - 1] + T1);
    // 行動2
    if (i >= 2) {
      cost[i] = Math.min(cost[i], cost[i - 2] + T1 + T2);
    }
    // 行動4
    if (i >= 4) {
      cost[i] = Math.min(cost[i], cost[i - 4] + T1 + T2 * 3);
    }
    // ハードルがあれば加算
    if (H[i]) {
      cost[i] = cost[i] + T3;
    }
  }

  // 答えはピッタリorジャンプ中にゴール
  const jump = [L - 3, L - 2, L - 1];
  let answer = cost[L];
  for (let i = 0; i < jump.length; i++) {
    if (jump[i] >= 0) {
      answer = Math.min(answer, cost[L - (3 - i)] + T1 * 0.5 + (0.5 + (2 - i)) * T2);
    }
  }

  console.log(answer);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
