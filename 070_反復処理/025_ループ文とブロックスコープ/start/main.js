let j;
for (let i = 0; i < 5; i++) {
  j = i * 2;

  setTimeout(function () {
    console.log(j);
  }, 1000);
}