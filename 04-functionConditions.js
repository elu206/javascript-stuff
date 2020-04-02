function cow(num){
  if(num == 1){
    return "highland";
  } else if (num == 2){
    return "longhorn"
  } else if (num == 3){
    return "shetland"
  } else {
    return "there are too many species of cow and i will not list them all"
  }
}

console.log(cow(1))
console.log(cow(2))
console.log(cow(3))
console.log(cow(10))
