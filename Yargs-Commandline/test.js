const { demandOption, argv } = require('yargs')
const yargs = require('yargs')

const notes = require('./notes');


yargs.command({
    command: 'add',
    describe: 'adding note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove node',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'read',
    describe: 'read node',
    handler: function () {
        notes.readNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'list node',
    handler: function () {
        notes.listNote();
    }
})

yargs.parse()
