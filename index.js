"use strict"
const Box = require("./box.js")
const inquirer  =  require('inquirer');
const info = require("./info.json")
const { default: chalk } = require("chalk")

const response = chalk.white;

const resumeOptions = {
    type : "list",
    name : "resumeOptions",
    message : "What do you want to know?",
    choices : [...Object.keys(info), "🔴 Exit"]
}

function showResume(){
    console.log(Box);
    handleResume();
}

function handleResume(){
    inquirer.prompt(resumeOptions).then((ans)=>{
        if(ans.resumeOptions == "Exit") return;

        const options = info[`${ans.resumeOptions}`]
        if(options){
            if(ans.resumeOptions == "Projects"){
                console.log(response(new inquirer.Separator()));
                options.forEach((info)=>{
                    console.log(response(" "+ info))
                })
                console.log(response(new inquirer.Separator()))
            }else{
                console.log(response(new inquirer.Separator()));
                options.forEach((info)=>{
                    console.log(response("📍",info))
                })
                console.log(response(new inquirer.Separator()))
            }
        }
    })
    //Handling exit
    inquirer.prompt({
        type : "list",
        name : "ExitBack",
        message : "Anything you missed or Exit?",
        choices : ["Back","Exit"],
    }).then((choice)=>{
        if(choice.exitBack == "Back"){
            handleResume();
        }else{
            console.log("Thank you!👍");
            return
        }
    })
    .catch((e)=>console.log("Oops",e))
}
showResume()