// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  const [R, C] = input[0].split(' ').map(x => parseInt(x, 10));
  const [sy, sx] = input[1].split(' ').map(x => parseInt(x, 10));
  const [gy, gx] = input[2].split(' ').map(x => parseInt(x, 10));
  const cList = [];
  for (let i = 0; i < R; i++) {
    const list = input[3 + i].split('');
    cList.push(list);
  }

  // 数字に変換
  const resultList = [];
  for (let i = 0; i < R; i++) {
    const convertedList = cList[i].map((elem) => -1);
    resultList.push(convertedList);
  }

  const startX = sx - 1;
  const startY = sy - 1;
  const goalX = gx - 1;
  const goalY = gy - 1;

  resultList[startY][startX] = 0;

  const query = [[startX, startY]];
  while (query.length > 0) {
    const [currentX, currentY] = query.shift();
    const list = [[currentX + 1, currentY], [currentX - 1, currentY], [currentX, currentY + 1], [currentX, currentY - 1]];
    for (let i = 0; i < list.length; i++) {
      const [x, y] = list[i];
      // 範囲内でなければ無視
      if (!((x >= 0 && x < C) && (y >= 0 && y < R))) {
        continue;
      }
      // 壁は無視
      if (cList[y][x] === '#') {
        continue;
      }

      // 未訪問であれば距離を更新してqueueに入れる
      if (resultList[y][x] === -1) {
        resultList[y][x] = resultList[currentY][currentX] + 1;
        query.push([x, y]);
      }
    }
  }

  // 結果出力
  console.log(resultList[goalY][goalX]);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
