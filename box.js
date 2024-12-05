import chalk from "chalk";
import boxen from "boxen";

const boxData = {
    name: `${chalk.bold("Hey👋, I am") + chalk.cyan(" Kuldeep\n") + chalk.grey("I know little bit of coding.")}`,
    work: "yet to speak about it.😅",
    github: chalk.gray("https://github.com/") + chalk.green("deepanshudks"),
    portfolio: chalk.green("https://kuldeep-portfo.netlify.app/"),
    linkedIn: chalk.gray("https://linkedin.com/in/") + chalk.green("kuldeep-gaud"),
    npx: chalk.green("npx") + " " + chalk
    ("deepanshudks"),
    printWork: chalk.white.bold("Work:"),
    printLinkedIn: chalk.white.bold("LinkedIn:"),
    printGithub: chalk.white.bold("GitHub:"),
    printPortfolio: chalk.white.bold("Portfolio:"),
    printCommd: chalk.white.bold("Command:"),
};

const boxContent = boxen(
    [
        `${boxData.name}\n`,
        `${boxData.printWork}  ${boxData.work}`,
        ``,
        `${boxData.printLinkedIn}  ${boxData.linkedIn}`,
        `${boxData.printGithub}  ${boxData.github}`,
        `${boxData.printPortfolio}  ${boxData.portfolio}\n`,
        `${boxData.printCommd}  ${boxData.npx}`,
    ].join("\n"),
    {
        margin: 1,
        float: "center",
        padding: 1,
        borderStyle: "single",
        borderColor: "cyan",
    }
);
export default boxContent;

