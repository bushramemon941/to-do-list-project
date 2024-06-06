#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todos: string[] = [];
console.log(
  chalk.magentaBright.bold("\n\t Wellcome To My Todo List Application\n")
);

async function createtodo(todos: string[]) {
  do {
    let ans = await inquirer.prompt({
      type: "list",
      message: chalk.green("What do you want to add in your todo list?"),
      name: "select",
      choices: ["Add", "update", "view", "delete"],
    });

    //  console.log(ans)
    if (ans.select == "Add") {
      let addTodo = await inquirer.prompt({
        type: "input",
        message: chalk.bgCyan("Add items in the list"),
        name: "todo",
      });
      todos.push(addTodo.todo);
      todos.forEach((todo) => console.log(todo));
      // console.log(todos)
    }
    if (ans.select == "update") {
      let updateTodo = await inquirer.prompt({
        type: "list",
        message: chalk.bgYellow("update items in the list"),
        name: "todo",
        choices: todos.map((item) => item),
      });
      let addTodo = await inquirer.prompt({
        type: "input",
        message: chalk.bgCyan("Add items in the list"),
        name: "todo",
      });
      let newTodo = todos.filter((val) => val !== updateTodo.todo);
      todos = [...newTodo, addTodo.todo];
      todos.forEach((todo) => console.log(todo));
      // console.log(todos)
    }

    if (ans.select == "view") {
      console.log(chalk.magentaBright.bold("*** TO DO LIST***"));
      // console.log(todos)
      todos.forEach((todo) => console.log(todo));
      console.log(chalk.magentaBright.bold("*************"));
    }

    if (ans.select == "delete") {
      let deleteTodo = await inquirer.prompt({
        type: "list",
        message: chalk.bgRedBright("update items in the list"),
        name: "todo",
        choices: todos.map((item) => item),
      });
      let newTodo = todos.filter((val) => val !== deleteTodo.todo);
      todos = [...newTodo];
      // console.log(todos);
      todos.forEach((todo) => console.log(todo));
    }
  } while (true);
}
createtodo(todos);
