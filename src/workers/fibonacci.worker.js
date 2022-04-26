const fibonacciCal = (n) =>
  n < 3 ? 1 : fibonacciCal(n - 1) + fibonacciCal(n - 2);

onmessage = (e) => {
  const { num } = e?.data;
  const startTime = new Date().getTime();
  const fibNum = fibonacciCal(num);
  postMessage({
    fibNum,
    time: new Date().getTime() - startTime,
  });
};
