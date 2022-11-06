// 1 Решение.
function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    return product;
  }

// 2 Решение.
function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }

  // 3 Решение.
  function factorialize(num, factorial = 1) {
    if (num === 0) {
      return factorial;
    } else {
      return factorialize(num - 1, factorial * num);
    }
  }

  // 4 Решение.
  function factorialize(num) {
    return num < 0 ? 1 :
      new Array(num)
        .fill(undefined)
        .reduce((product, _, index) => product * (index + 1), 1);
  }