// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  // 数値の配列を作る
  const [N, M] = input[0].split(' ').map(x => parseInt(x, 10));

  const visited = [...Array(N + 1)].map(() => false);
  const rinsetsu = [...Array(N + 1)].map(() => []);
  for (let i = 0; i < M; i++) {
    const [u, v] = input[i + 1].split(' ').map(x => parseInt(x, 10));
    rinsetsu[u].push(v);
    rinsetsu[v].push(u);
  }

  // 探索
  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      count++;
      visited[i] = true;
    }
    // たどれる所を探索済みにする
    let target = rinsetsu[i];
    while (target.length > 0) {
      const node = target.shift();
      if (visited[node] === false) {
        visited[node] = true;
        target = target.concat(rinsetsu[node]);
      }
    }
  }

  console.log(count);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
