// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  const N = parseInt(input[0], 10);
  const cList = input[1].split(' ').map(x => parseInt(x, 10));
  const Q = parseInt(input[2], 10);
  const sList = [];
  for (let i = 0; i < Q; i++) {
    const s = input[3 + i].split(' ').map(x => parseInt(x, 10));
    sList.push(s);
  }

  // 奇数、偶数それぞれのminを求める
  let oddMin = Number.MAX_SAFE_INTEGER;
  let evenMin = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < N; i++) {
    // indexがずれている都合上、割り切れる時が奇数
    if (i % 2 === 0) {
      oddMin = Math.min(oddMin, cList[i]);
    } else {
      evenMin = Math.min(evenMin, cList[i]);
    }
  }
  // 全体のmin
  let min = Math.min(oddMin, evenMin);

  // クエリの処理
  const soldList = [...Array(N)].map(() => 0);
  let oddSold = 0;
  let evenSold = 0;
  for (let i = 0; i < Q; i++) {
    const s = sList[i];
    if (s[0] === 1) {
      const sub = s[1] % 2 === 1 ? oddSold : evenSold;
      const stock = cList[s[1] - 1] - soldList[s[1] - 1] - s[2] - sub;
      if (stock >= 0) {
        soldList[s[1] - 1] = soldList[s[1] - 1] + s[2];
        if (s[1] % 2 === 1) {
          oddMin = Math.min(oddMin, stock);
        }
        min = Math.min(min, stock);
      }
    } else if (s[0] === 2) {
      const stock = oddMin - s[1];
      if (stock >= 0) {
        oddSold = oddSold + s[1];
        oddMin = stock;
        min = Math.min(min, stock);
      }
    } else if (s[0] === 3) {
      const stock = min - s[1];
      if (stock >= 0) {
        oddMin = oddMin - s[1];
        min = stock;
        oddSold = oddSold + s[1];
        evenSold = evenSold + s[1];
      }
    }
    // console.log(soldList);
  }

  // 纏めて計算
  let total = 0;
  // 個別に売れた分
  for (let i = 0; i < N; i++) {
    total = total + soldList[i];
  }
  // 奇数の売れた分を足す
  total += oddSold * Math.ceil(N / 2);
  // 偶数の売れた分を足す
  total += evenSold * Math.floor(N / 2);
  // 結果出力
  console.log(total);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
