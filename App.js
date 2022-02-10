console.log('starting app.js')
const { notStrictEqual } = require('assert')
const fs = require('fs') 
const yargs = require('yargs')
const note = require('./note')
fs.appendFileSync("greetings.txt",'Hello World')



// console.log("process", process.argv);
console.log("yargs" , yargs.argv)

var title = yargs.argv.title
var body = yargs.argv.body;
var command = yargs.argv._[0]


if(command === "add"){
    console.log("Notes added")
    note.addNotes(title,body)
}
else if(command === "remove"){
    console.log("removed")
    note.removeNote(title)
}
else if(command === "read"){
    console.log("reading note")
    note.readNote(title)
}
else if(command === "list"){
    console.log("listing all notes")
    note.getAll()
}
else{
    console.log('Unknown command was entered')
}




















// console.log(note.add(2,5))
//  console.log(note.sub(9,7))






















/*

/lets us grab other people or nodes internal/third party modules and let us use them in our app 
// filesystem
// Using require and yargs
//Getting user input and adding a note to the txt file

*/
