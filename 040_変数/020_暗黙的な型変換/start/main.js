function prontTypeAndValue(val) {
  console.log(typeof val, val)
}

let a = 0;

prontTypeAndValue(a);

let b = '1' + a;

prontTypeAndValue(b);

let c = 15 - b;

prontTypeAndValue(c);

let d = c - null;

prontTypeAndValue(d);


let e = d - true;

prontTypeAndValue(e);
