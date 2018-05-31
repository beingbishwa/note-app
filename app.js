const yargs = require('yargs')
const Note = require('./note')

const argv = yargs.argv
const inputTask = argv._
console.log(argv)

const notes = new Note()


switch (inputTask[0]) {
    case 'add':
        const message = notes.addNote(argv.title, argv.body)
        console.log(message)
        break

    case 'list':
        console.log('Listing notes')
        break
    
    case 'remove':
        console.log('Listing notes')
    
    default:
        break;
}

