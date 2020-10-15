const a = {
  prop: 0
}

let { prop } = addEventListener

prop = 1;

console.log(a, prop);

function fn(obj) {
  let { prop } = obj;
  prop = 1;
  console.log(obj, prop);
}

fn(a);