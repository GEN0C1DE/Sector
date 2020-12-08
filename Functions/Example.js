class Example {
  FunctionOfStuff(Arguments1, Arguments2) {
    return console.log(`${Arguments1} and ${Arguments2} have both been identified as arguments.`)
  }
  FunctionOfStuff2(Arguments1, Arguments2) {
    if (isNaN(Arguments1) && isNaN(Arguments2)) {
      return console.log(Arguments1 + Arguments2)
    }
  }
}

module.exports = Example
