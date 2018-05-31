const yargs = require('yargs')
const Note = require('./note')

const argv = yargs.argv
const inputTask = argv._

const notes = new Note()

switch (inputTask[0]) {
    case 'add':
        message = notes.addNote(argv.title, argv.body)
        break

    case 'list':
        notes.getAll()
        break
    
    case 'remove':
        notes.removeNote(argv.title)
        break
    
    default:
        break;
}

