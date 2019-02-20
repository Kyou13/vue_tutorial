
import sys

def main(argv):
    # このコードは引数と標準出力を用いたサンプルコードです。
    # このコードは好きなように編集・削除してもらって構いません。
    # ---
    # This is a sample code to use arguments and outputs.
    # Edit and remove this code as you like.
    x,y,z = tuple(map(int, argv))

    max_value = max(x,y,z)
    min_value = min(x,y,z)

    memo = [[-1 for k in range(min_value, max_value+1)] for j in range(min_value, max_value+1)]

    def rec(x,y,z):
      nonlocal memo
      nonlocal min_value

      temp_x_idx = x - min_value
      temp_y_idx = y - min_value
      temp_z_idx = z - min_value

      if x <= y:
        memo[temp_x_idx][temp_y_idx] = y
        return y
      else:
        x_temp = memo[temp_x_idx - 1][temp_y_idx]
        y_temp = memo[temp_y_idx - 1][temp_z_idx]
        z_temp = memo[temp_z_idx - 1][temp_x_idx]

        if x_temp != -1:
          x = x_temp
        if y_temp != -1:
          y = y_temp
        if z_temp != -1:
          z = z_temp

        temp = rec(
          rec(x-1,y,z),
          rec(y-1,z,x),
          rec(z-1,x,y)
        )

        memo[temp_x_idx][temp_y_idx] = temp
        return temp

    print(rec(x,y,z))

if __name__ == '__main__':
    main(sys.argv[1:])

import sys

def main(argv):
    # このコードは引数と標準出力を用いたサンプルコードです。
    # このコードは好きなように編集・削除してもらって構いません。
    # ---
    # This is a sample code to use arguments and outputs.
    # Edit and remove this code as you like.
    x,y,z = tuple(map(int, argv))

    max_value = max(x,y,z)
    min_value = min(x,y,z)

    memo = [-1 for k in range(min_value, max_value+1)]

    def rec(x,y,z):
      nonlocal memo
      nonlocal min_value

      temp_x_idx = x - min_value
      temp_y_idx = y - min_value
      temp_z_idx = z - min_value

      if x <= y:
        memo[temp_x_idx] = y
        return y
      else:
        x_temp = memo[temp_x_idx - 1]
        y_temp = memo[temp_y_idx - 1]
        z_temp = memo[temp_z_idx - 1]

        if x_temp != -1:
          x = x_temp
        if y_temp != -1:
          y = y_temp
        if z_temp != -1:
          z = z_temp

        temp = rec(
          rec(x-1,y,z),
          rec(y-1,z,x),
          rec(z-1,x,y)
        )

        memo[temp_x_idx] = temp
        return temp

    print(rec(x,y,z))

if __name__ == '__main__':
    main(sys.argv[1:])

