const fs = require('fs')

module.exports = class Note {
    constructor() {
        try{
            const fileContent = fs.readFileSync('notes.json')
            this.notes = JSON.parse(fileContent)
        }catch(error){
            this.notes = []
        }
    }

    addNote(title, body) {
        const newNote = {title, body}
        this.notes.push(newNote)
        try {
            fs.writeFileSync('notes.json', JSON.stringify(this.notes))   
            return 'Note successfully added'
        } catch (error) {
            return 'Sorry!! An error occured. Try again.'
        }
    }


}