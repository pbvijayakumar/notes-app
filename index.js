const notes = require('./notes.js')
const app = require('./app.js')


notes.addNote({title: "node", note: "first node app"});
 notes.addNote({
    describe: 'Vijay',
    demandOption: true,
    type: 'string',
    not: 'Hi this is Vijay on node',
});

notes.listNotes();

notes.readNote('node')