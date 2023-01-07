# 再帰上限を増やす
import sys;
import math;
sys.setrecursionlimit(1000000);

N = int(input());

def solver(X):
  rootX = math.sqrt(X);
  floor = math.floor(rootX);

  for i in range(2, X + 1):
    if X % i == 0:
      # 自乗で割り切れるか判定
      if X % (i**2) == 0:
        another = X // (i**2);
        print(str(i) + " " + str(another));
        break;
      else:
        another = round(math.sqrt(X / i));
        print(str(another) + " " + str(i));
        break;

for i in range(0, N):
  solver(int(input()));
