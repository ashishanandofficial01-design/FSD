import { EventEmitter } from "node:events";

const sayHi = (name) => {
    console.log(`${name} Logged in`);
};

const task = new EventEmitter();
task.once("greet",()=>{
    console.log("System Started...");
    
})
task.once("exit",(name)=>{
    console.log(`System Shutdown by ${name}`);
    
})

task.on('greet',sayHi);
task.on("greet",(name)=>{
    console.log(`${name} starts Working`);
    
});
task.on("greet",(name)=>{
    console.log(`${name} Logged Out`);
    
})

task.emit('greet',"Rahul Singh");
console.log();
task.off("greet",sayHi);//must have function name
task.emit('greet',"Aditya Singh");
task.emit('greet',"Ayush Pandey");
console.log();

task.emit('exit',"Manager");// execute only once
console.log("Total Listener",task.listenerCount("greet"));
task.removeAllListeners("greet");
