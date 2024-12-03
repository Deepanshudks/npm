const chalk  = require("chalk")
const boxen = require("boxen")

const boxData = {
    name : `${
        chalk.bold("Hey👋, I am") + chalk.cyan("Kuldeep\n") + chalk.grey("I code.")
    }`,
    work : "yet to speak about it.",
    github : chalk.gray("https://github.com/")+ chalk.green("deepanhudks"),
    portfolio : ("https://kuldeep-portfo.netlify.app/"),
    linkedIn : chalk.gray("https://linkedin.com/in/")+ chalk.green("kuldeep-gaud"),
    npx : chalk.cyanBright("npx")+" "+chalk.cyan("deepanshudks"),
    printWork: chalk.white.bold("Work:"),
    printLinkedIn: chalk.white.bold("LinkedIn:"),
    printGithub: chalk.white.bold("GitHub:"),
    printPortfolio: chalk.white.bold("Portfolio:"),
    printCommd: chalk.white.bold("Commd:"),
}

exports.Box = boxen(
    [
        `${boxData.name}\n`,
        ``,
        `${boxData.printWork}  ${boxData.work}`,
        `${boxData.printLinkedIn}  ${boxData.linkedIn}`,
        `${boxData.printGithub}  ${boxData.github}`,
        `${boxData.printPortfolio}  ${boxData.portfolio}\n`,
        ``,
        `${printCommd}  ${npx}` 
    ].join("\n"),
    {
        margin: 1,
        float: "center",
        padding: 1,
        borderStyle: "single",
        borderColor: "cyan",
      }
)