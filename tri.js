const tri = function(n) {
  if (n <= 1) {
    return n;
  } else {
    return n + tri(n-1)
  }
}

console.log(tri(6))