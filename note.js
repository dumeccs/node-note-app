// console.log('Starting notes.js')

// let add = (x , y) =>{
//     return x + y
// }

// let sub =(x, y) =>{
//     return x - y
// }

// module.exports = {
//     add,
//     sub
// }
const fs= require('fs')
function fetchNotes(){
    try{
        return JSON.parse(fs.readFileSync('notes.txt'))
    }
    catch{
        return []
    }
}


function addNotes(title,body){

    var notes = fetchNotes()

    var note ={
        title,
        body
    }
    
    notes.push(note)
    logNote(note)
    fs.writeFileSync("notes.txt",JSON.stringify(notes) )
}


var removeNote = (title) => { 
    var notes = fetchNotes()
    var filteredNote = notes.filter((note) => note.title !== title)
    fs.writeFileSync("notes.txt",JSON.stringify(filteredNote) )
    
}

var readNote = (title) => {
    var notes = fetchNotes()
    var filteredNote = notes.filter((note) => note.title === title)
    console.log(filteredNote)
    
}

var getAll = () => {
    var notes = fetchNotes()
    var allNote = notes.map(note => logNote(note))
    logNote(allNote)
}





module.exports = {
    addNotes,
    removeNote,
    readNote,
    getAll
}

var logNote = (note) =>{
    console.log("===========================================")
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
    console.log("===========================================")
}