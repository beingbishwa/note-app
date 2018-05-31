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
}