const yargs = require('yargs')


const argv = yargs.argv
const inputTask = argv._
console.log(argv)




switch (inputTask[0]) {
    case 'add':
        console.log('Adding notes')
        break

    case 'list':
        console.log('Listing notes')
        break
    
    case 'remove':
        console.log('Listing notes')
    
    default:
        break;
}

