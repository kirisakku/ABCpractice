// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  const S = input[0];

  const three = [];
  // 3文字ずつ切り出す
  for (let i = 0; i < S.length - 2; i++) {
    const word = S[i] + S[i + 1] + S[i + 2];
    three.push(word);
  }
  // 重複排除
  const distincted = [...new Set(three)];
  // 一文字目をドットに置換した結果
  const dcc = distincted.map((elem) => '.' + elem[1] + elem[2]);
  // 二文字目をドットに置換した結果
  const cdc = distincted.map((elem) => elem[0] + '.' + elem[2]);
  // 三文字目をドットに置換した結果
  const ccd = distincted.map((elem) => elem[0] + elem[1] + '.');
  // 1, 2文字目をドットに置換した結果
  const ddc = distincted.map((elem) => '..' + elem[2]);
  // 2, 3文字目をドットに置換した結果
  const cdd = distincted.map((elem) => elem[0] + '..');
  // 1, 3文字目をドットに置換した結果
  const dcd = distincted.map((elem) => '.' + elem[1] + '.');

  // 2文字ずつ切り出す
  const two = [];
  for (let i = 0; i < S.length - 1; i++) {
    const word = S[i] + S[i + 1];
    two.push(word);
  }
  // 重複排除
  const distincted2 = [...new Set(two)];
  // 1文字目をドットに置換した結果
  const dc = distincted2.map((elem) => '.' + elem[1]);
  // 2文字目をドットに置換した結果
  const cd = distincted2.map((elem) => elem[0] + '.');

  // 1文字単位で区切った結果
  const one = S.split('');

  // 全部合体させる
  const result = distincted.concat(dcc, cdc, ccd, ddc, cdd, dcd, distincted2, dc, cd, one);
  // 共通のものを足す
  if (S.length >= 3) {
    result.push('...');
  }
  if (S.length >= 2) {
    result.push('..');
  }
  if (S.length >= 1) {
    result.push('.');
  }

  // 重複排除
  const distinctedResult = [...new Set(result)];

  // 結果出力
  console.log(distinctedResult.length);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
