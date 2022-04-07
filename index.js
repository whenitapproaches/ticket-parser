const { program } = require("commander")

program.option("-c", "--commit")
// .option('-s, --separator <char>');

program.parse()

const options = program.opts()

const parseTicketTitle = (title) => {
  const [code, ...parts] = title.trim().split(" ")

  const content = parts
    .map((o) =>
      o
        .toLowerCase()
        .replace(/[\[\]]/g, " ")
        .replace(/  /g, "_")
        .replace(/ /g, "")
    )
    .join("_")

  return `feature/${code}-${content}`
}

var ncp = require("copy-paste");
console.log(ncp.copy(parseTicketTitle(program.args[0])))
