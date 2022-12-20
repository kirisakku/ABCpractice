// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');

  const [N, M] = input[0].split(' ').map(x => parseInt(x, 10));
  const S = [];
  for (let i = 0; i < N; i++) {
    const data = input[1 + i].split('');
    S.push(data);
  }

  // 組み合わせ列挙
  const kumi = [...Array(N)].map((_, i) => i);
  const kumiawase = [];
  for (let i = 0; i < kumi.length; i++) {
    const array2 = kumi.slice(i + 1);
    for (let j = 0; j < array2.length; j++) {
      kumiawase.push([kumi[i]].concat([array2[j]]));
    }
  }

  let count = 0;
  for (let i = 0; i < kumiawase.length; i++) {
    const [p1, p2] = kumiawase[i];
    const s1 = S[p1];
    const s2 = S[p2];

    let flag = true;
    for (let j = 0; j < M; j++) {
      if (s1[j] === 'x') {
        if (s2[j] !== 'o') {
          flag = false;
          break;
        }
      }
    }
    if (flag) {
      count++;
    }
  }

  console.log(count);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
