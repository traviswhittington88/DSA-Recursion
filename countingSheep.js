const countingSheep = function(sheep) {
  //Base call
  if (sheep === 0) {
  return console.log(`All sheep jumped over the fence`) //must use return or recursion will get stuck infinite loop
  } else {
    console.log(`${sheep}: Another sheep jumps over the fence`)
  }
  
  countingSheep(sheep - 1) // can use return or no, doesn' t matter
}

let sheep = 4

countingSheep(sheep)

