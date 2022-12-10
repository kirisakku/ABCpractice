// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  // 数値の配列を作る
  const N = parseInt(input[0], 10);

  // ゾロ目を求める
  const zoromeList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let i = 10;
  while (zoromeList.length <= 50) {
    // 文字列に変換
    const str = '' + i;
    const strlist = str.split('');
    // 全文字一緒だったらiをゾロ目リストに追加
    if (strlist.every((elem) => elem === str[0])) {
      zoromeList.push(i);
    }
    i = i + 1;
  }

  console.log(zoromeList[N - 1]);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
