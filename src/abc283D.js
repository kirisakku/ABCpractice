// inputに入力データ全体が入る
function Main (input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  const S = input[0].split('');

  // 既に出た要素
  const stack = [];
  let current = new Set();
  let out = false;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      // stackに要素追加
      stack.push(current);
      current = new Set([...current]);
    } else if (S[i] === ')') {
      // stackから要素取得
      const before = stack.pop() || new Set();
      current = before;
    } else {
      if (current.has(S[i])) {
        out = true;
        break;
      } else {
        current.add(S[i]);
      }
    }
  }

  if (out) {
    console.log('No');
  } else {
    console.log('Yes');
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
// Main('((a)ba)');
