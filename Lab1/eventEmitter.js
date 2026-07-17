import { EventEmitter } from "node:events";

const task = new EventEmitter();


const sayHi = (name) => {
    console.log(`Logged in ${name}`);
};

task.once("greet", () => {
    console.log("System started...");
});

task.on("greet", sayHi);

task.on("greet", () => {
    console.log("Logged Out");
});

const shutdown = (name) => {
    console.log(`System is shutting down by ${name}`);
};


task.on("exit", shutdown);
task.emit("greet", "Akhil Singh");
task.emit("greet", "Ashish Singh");
task.emit("greet", "Aditya Singh");
task.emit("greet", "MANAGER");
task.emit("exit", "MANAGER");


