// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  // 数値の配列を作る
  const [H, W] = input[0].split(' ').map(x => parseInt(x, 10));
  const map = [];
  // 訪問したかどうかのmap
  const visited = [];
  for (let i = 0; i < H; i++) {
    const list = input[1 + i].split('');
    map.push(list);
    const data = [...Array(W)].map(() => false);
    visited.push(data);
  }

  // si, sj, gi, gjを探す
  let [si, sj] = [-1, -1];
  let [gi, gj] = [-1, -1];
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (map[i][j] === 's') {
        si = i;
        sj = j;
      } else if (map[i][j] === 'g') {
        gi = i;
        gj = j;
      }
    }
  }

  visited[si][sj] = true;
  const stack = [[si, sj]];

  // 調査関数
  while (stack.length > 0) {
    const [i, j] = stack.shift();
    visited[i][j] = true;

    // ゴールしてたら終了
    if (i === gi && j === gj) {
      break;
    }

    // 4方向のマスを探索
    const arround = [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]];
    for (let k = 0; k < 4; k++) {
      const [i1, j1] = arround[k];
      // 範囲外なら何もしない
      if (j1 < 0 || W <= j1) {
        continue;
      }
      if (i1 < 0 || H <= i1) {
        continue;
      }
      // 壁は無視
      if (map[i1][j1] === '#') {
        continue;
      }
      // 未訪問であれば再帰的に呼び出す
      if (!visited[i1][j1]) {
        visited[i1][j1] = true;
        stack.push([i1, j1]);
      }
    }
  }

  // 結果出力
  if (visited[gi][gj]) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
