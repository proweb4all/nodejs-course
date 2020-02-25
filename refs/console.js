function consoleToJSON() {
  const argsObj = {}

  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i].split('=')
    argsObj[arg[0]] = arg[1] ? arg[1] : true
  }
  return argsObj
}

console.log(consoleToJSON())
