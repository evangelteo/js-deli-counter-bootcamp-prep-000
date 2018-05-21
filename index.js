function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + deliLine.shift() + "."
  }
}

function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    console.log("The line is currently:")
    for (let i = 0; i < deliLine.length-1; i++) {
      console.log(i+1 +". "+deliLine[i]+", ")
    }
    console.log(deliLine.length+". "+deliLine[deliLine.length-1])
  }
}