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
        if(this.checkTitle(title)){
            this.notes.push(newNote)
            if(this.writeNote()){
                console.log('Note successfully added')
            }else{
                console.log('Sorry!! An error occured. Try again')
            }
        }else{
            console.log('Title already used. No new notes are added')
        }
    }

    getAll() {
        if(this.notes.length > 0){
            console.log(`Showing ${this.notes.length} note${this.notes.length === 1 ? '' : 's'}`)
            console.log('-----------------------------')
            this.notes.forEach(el => this.logNote(el))
        }else{
            console.log('No notes available')
        }
    }

    viewNote(title) {
        const index = this.checkTitle(title)
        if(index !== -1){
            console.log('Loading note')
            console.log('-----------------------------')
            this.logNote(this.notes[index])
        }else{
            console.log('Title doesn\'t exist')
        }
    }

    removeNote(title) {
        const index = this.checkTitle(title)
        if(index !== -1){
            this.notes.splice(index, 1)
            if(this.writeNote()){
                console.log('Note successfully removed')
            }else{
                console.log('Sorry!! An error occured. Try again.')
            }
        }else{
            console.log('Title doesn\'t exist')
        }
    }

    logNote(obj) {
        console.log(`Title: ${obj.title}`)
        console.log(`Body: ${obj.body}`)
        console.log('-----------------------------')
    }

    checkTitle(title) {
        const index = this.notes.findIndex(el => el.title === title)
        return index
    }

    writeNote() {
        try {
            fs.writeFileSync('notes.json', JSON.stringify(this.notes))   
            return true
        } catch (error) {
            return false
        }
    }

}