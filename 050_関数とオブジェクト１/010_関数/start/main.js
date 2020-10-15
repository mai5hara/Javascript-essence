function fn(...args) {
  console.log(args)
  const a = arguments[0];
  const b = arguments[1];
  console.log(arguments)
  console.log(a, b);
}

fn(1, undefined);