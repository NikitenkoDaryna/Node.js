const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your notes...'

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote){
        notes.push({ title, body })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const noteToRemove = notes.find((note) => note.title === title)
    if (noteToRemove !== undefined){
        const updateNotes = notes.filter((note) => { note.title !== title })
        saveNotes(updateNotes)
        console.log(chalk.green.inverse(`Note with ${title} title was removed!`))
    } else {
        console.log(chalk.red.inverse(`Note with ${title} title wasn't found!`))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bgBlueBright('Your notes:'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const foundNote = notes.find((note) => note.title === title)
    if (foundNote){
        console.log(`Title: ${chalk.cyanBright(foundNote.title)}, Body: ${foundNote.body}`)
    } else {
        console.log(chalk.red('No note found'))
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}
