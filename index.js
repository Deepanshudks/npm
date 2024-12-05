#!/usr/bin/env node --no-warnings=ExperimentalWarning
import Box from "./box.js";
import inquirer from "inquirer";
import info from './info.json' assert { type: 'json' };
import chalk from "chalk";

const response = chalk.white;

const resumeOptions = {
    type: "list",
    name: "resumeOptions",
    message: "What do you want to know?",
    choices: [...Object.keys(info), "🔴 Exit"],
};

function showResume() {
    console.log(Box);
    handleResume();
}

function handleResume() {
    inquirer
        .prompt(resumeOptions)
        .then((ans) => {
            if (ans.resumeOptions === "🔴 Exit") {
                console.log(chalk.gray("──────────────"))
                console.log("Thank you! 👍");
                console.log(chalk.gray("──────────────"))
                return;
            }

            const options = info[ans.resumeOptions];
            if (options) {
                console.log(chalk.gray("──────────────"))
                options.forEach((item) => {
                    console.log(response("📍 " + item));
                });
                console.log(chalk.gray("──────────────"))
            }

            inquirer
                .prompt({
                    type: "list",
                    name: "exitBack",
                    message: "Anything else you want to explore or Exit?",
                    choices: ["Back", "Exit"],
                })
                .then((choice) => {
                    if (choice.exitBack === "Back") {
                        handleResume();
                    } else {
                        console.log(chalk.gray("──────────────"))
                        console.log("Thank you! 👍");
                        console.log(chalk.gray("──────────────"))

                        return;
                    }
                });
        })
        .catch((e) => {});
}

showResume();
