// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  const [N, Q] = input[0].split(' ').map(x => parseInt(x, 10));
  const sList = [];
  for (let i = 0; i < Q; i++) {
    const s = input[1 + i].split(' ').map(x => parseInt(x, 10));
    sList.push(s);
  }

  // 隣接行列を作る
  const rinsetsu = [];
  for (let i = 0; i < N; i++) {
    const data = [...Array(N)].map(() => 'N');
    rinsetsu.push(data);
  }

  // 処理
  for (let i = 0; i < Q; i++) {
    const s = sList[i];
    if (s[0] === 1) {
      rinsetsu[s[1] - 1][s[2] - 1] = 'Y';
    }
    if (s[0] === 2) {
      // 隣接行列を縦方向に探索する
      for (let j = 0; j < N; j++) {
        if (rinsetsu[j][s[1] - 1] === 'Y') {
          rinsetsu[s[1] - 1][j] = 'Y';
        }
      }
    }
    if (s[0] === 3) {
      const targetIndexList = [];
      for (let i = 0; i < N; i++) {
        if (rinsetsu[s[1] - 1][i] === 'Y') {
          for (let j = 0; j < N; j++) {
            if (j !== s[1] - 1 && rinsetsu[i][j] === 'Y') {
              targetIndexList.push(j);
            }
          }
        }
      }
      // 対象を纏めて更新
      for (let i = 0; i < targetIndexList.length; i++) {
        rinsetsu[s[1] - 1][targetIndexList[i]] = 'Y';
      }
    }
  }
  // 結果出力
  for (let i = 0; i < N; i++) {
    const data = rinsetsu[i];
    const str = data.join('');
    console.log(str);
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
