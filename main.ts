import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.yellow("<<<<<<<<<<  ATM-Machine  >>>>>>>>>>"));
let myBalance =20000;
let myPin : number=8520
let answer= await inquirer.prompt([
        {
            name:"pincode",
            type:"number",
            message:chalk.blue.italic("Please enter your pin code"),
        }
])

if (answer.pincode===myPin){
        console.log(chalk.magenta("Wellcome your account"));

    let operateAnswer= await inquirer.prompt([
        {
            name: "operate",
            type: "list",
            message: "please select your option?",
            choices: ["withdraw", "check balance", "Fast"]
        }
    ])

    if (operateAnswer.operate==="withdraw"){
        let amountAns= await inquirer.prompt([
            {
                name:"amount",
                type:"number",
                message:chalk.cyan("Please enter the amount you want to withdraw"),
            }
        ])
    
        if(amountAns.amount > myBalance){
            console.log(chalk.red.bold("Transaction failed"));
        }
        else {
            myBalance -= amountAns.amount;
            console.log(chalk.green(`your ${amountAns.amount} successfully withdraw`));
            console.log(chalk.magenta(`Your remaining balance is ${myBalance}$`));
        }
    }
    else if (operateAnswer.operate==="check balance"){
        console.log(chalk.gray(`Your current balance is 20000 $`))

    }
    else if (operateAnswer.operate === "Fast"){
        let fast=await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                message: "please select amount which you want to withdraw",
                choices: ["1000", "5000", "10000", "15000"]

            }
        ])
        myBalance -= fast.fastcash
        console.log(chalk.yellow(`your ${fast.fastcash} successfully withdraw \nYour remaining balance is  ${myBalance}$ `));

    }
} 
else{
    console.log(chalk.red("Please enter correct pin code"));
}
