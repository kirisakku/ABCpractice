// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  const [N, M, Q] = input[0].split(' ').map(x => parseInt(x, 10));
  const uvList = [];
  for (let i = 0; i < M; i++) {
    const uv = input[1 + i].split(' ').map(x => parseInt(x, 10));
    uvList.push(uv);
  }
  const cList = input[M + 1].split(' ').map(x => parseInt(x, 10));
  const sList = [];
  for (let i = 0; i < Q; i++) {
    const s = input[M + 2 + i].split(' ').map(x => parseInt(x, 10));
    sList.push(s);
  }

  // 隣接リスト作成
  const rinsetsu = [...Array(N + 1)].map(() => []);
  for (let i = 0; i < M; i++) {
    rinsetsu[uvList[i][0]].push(uvList[i][1]);
    // 逆方向も追加する
    rinsetsu[uvList[i][1]].push(uvList[i][0]);
  }
  // 色塗り実行
  for (let i = 0; i < Q; i++) {
    const s = sList[i];
    const color = cList[s[1] - 1];
    console.log(color);

    // スプリンクラー起動のケース
    if (s[0] === 1) {
      // 対象取得
      const taisyou = rinsetsu[s[1]];
      for (let j = 0; j < taisyou.length; j++) {
        cList[taisyou[j] - 1] = color;
      }
    }
    // 色置き換えのケース
    if (s[0] === 2) {
      cList[s[1] - 1] = s[2];
    }
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
