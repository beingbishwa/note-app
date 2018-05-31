const yargs = require('yargs')
const Note = require('./note')

const titleOptions = {
    describe: 'Title of note',
    demandOption: true,
    alias: 't'
}
const bodyOptions = {
    describe: 'Body of note',
    demandOption: true,
    alias: 'b'
}
const argv = yargs.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
})
.command('list', 'List all notes')
.command('view', 'View a single note', {
    title: titleOptions
})
.command('remove', 'Remove a note', {
    title: titleOptions
})
.help()
.argv
const inputTask = argv._

const notes = new Note()

switch (inputTask[0]) {
    case 'add':
        message = notes.addNote(argv.title, argv.body)
        break

    case 'list':
        notes.getAll()
        break
    
    case 'view':
        notes.viewNote(argv.title)
        break
    
    case 'remove':
        notes.removeNote(argv.title)
        break
    
    default:
        break;
}

