
var items=[{"name":"banana","height":168,"weight":58},{"name":"melon","height":178,"weight":61},{"name":"budou","height":198,"weight":88},{"name":"momo","height":138,"weight":32}]

function CompareHeight(a, b) {
  return a.height - b.height;
}

function CompareName(a, b) {
  if (a.name < b.name) {
    return 1;
  } else {
    return -1;
  }
}

function CompareWeight(a,b) {
  if(a.weight<b.weight) {
    return 1;
  } else {
    return -1;
  }
}

console.log(items.sort(CompareHeight))
console.log(items.sort(CompareName))
console.log(items.sort(CompareWeight))
