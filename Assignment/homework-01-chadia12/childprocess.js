function lucas (n) {
  if (n == 0) {
    return 2;
  } else if (n == 1) {
    return 1;
  }
  return lucas(n - 1) + lucas(n - 2);
};


process.on("message", (n) => {
  const reslut = lucas(n);
  process.send(JSON.stringify({"lucas":reslut}));
});
