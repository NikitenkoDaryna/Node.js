const yargs = require('yargs')
const notes = require('./notes')


// Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
      notes.addNote(argv.title, argv.body)
    }
}).argv

// Create remove command
yargs.command({
    command:'remove',
    describe:"Remove a note",
    builder:{
        title:{
            describe:'Remove title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
}).argv

yargs.command(
    {
        command:'list',
        describe:'List the notes',
        handler(){
            notes.listNotes()
        }
    }
).argv

yargs.command(
    {
        command:'read',
        describe:'Read the notes',
        builder:{
            title: {
                describe:'Note title',
                demandOption:true,
                type: 'string'
            }
        },
        handler(argv){
            notes.readNote(argv.title)
        }
    }
).argv
