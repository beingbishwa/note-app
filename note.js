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

    getAll() {
        if(this.notes.length > 0){
            this.notes.forEach(el => this.logNote(el))
        }else{
            console.log('No notes available')
        }
        
    }

    _logNote(obj) {
        console.log(`Title: ${obj.title}`)
        console.log(`Body: ${obj.body}`)
        console.log('-----------------------------')
    }

}