'use strict'
const NOTES_KEY = 'notes'
import storageService from './storageService.js'
import Note from './NoteClass.js'
import Todo from './TodoClass.js'
var gNotes = [];
function genId() {
    var charStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'
    var numOfChars = Math.floor(1 + Math.random() * 10);
    var id = charStr.split('')[Math.floor(0 + Math.random() * 25)];
    for (var i = 0; i < 10; i++) {
        id += charStr.split('')[Math.floor(0 + Math.random() * (charStr.length - 1))];
    }
    return id;
}
function createNote(type) {

    // return {
    //     id: genId(),
    //     type: 'Text',
    //     isPinned: false,
    //     info: {
    //         url: '',
    //         title: '',
    //         text: getRandomText(),
    //         color: ''
    //     },
    //     timeStamp: (new Date).getTime()
    // }
    let note= new Note(type,isPinned='false',color='blue');
    note.info.text=getRandomText();
    return note;
}

function getRandomText() {
    var numOfWords = Math.floor(1 + Math.random() * 10);
    var randText = '';
    var loremStr = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eveniet quasi dolore sunt consequuntur cumque! Atque cumque eos sint temporibus amet voluptatem officia iusto quod vero quos exercitationem, iure animi!'
    for (var i = 0; i < numOfWords; i++) {
        randText += loremStr.split(' ')[i] + ' ';
    }
    return randText;
}
function createNotes(numOfNotes) {
    var notes = [];
    if (!storageService.load(NOTES_KEY)) {
        for (var i = 0; i < numOfNotes; i++) {
            notes.push(createNote('NoteText'));
        }
        storageService.store(NOTES_KEY, notes)
    }
    else notes = storageService.load(NOTES_KEY);
    gNotes = notes;
    return notes;
}

function getNotes() {
    return Promise.resolve(gNotes);
}

function query(filterBy) {
    if (gNotes.length === 0) createNotes(8);
    var field='title';
    for (const key in filterBy) {
        if(filterBy[key]) field=key;
        else continue;
    }
    if (filterBy) return Promise.resolve(gNotes.filter(note => {
        return note.info[field].toLowerCase().includes(filterBy[field].toLowerCase())
    }));
    //return Promise.resolve([...gNotes]);
}

function getNoteById(id) {
    const note = gNotes.find(note => note.id === id)
    return Promise.resolve({ ...note })
}

function saveNote(NoteDetails) {
    ;
    const newNote = createNote()//new Car(carDetails.name , carDetails.color) //reminder:do it with a class and a constructor
    newNote.isPinned = NoteDetails.isPinned;
    newNote.type = NoteDetails.type;
    newNote.info.title = NoteDetails.title;
    newNote.info.text = NoteDetails.text;
    newNote.info.url = NoteDetails.url;
    newNote.info.color = NoteDetails.color;
    gNotes = [...gNotes, newNote];
    return Promise.resolve(newNote)
}

export default {
    getNotes,
    createNotes,
    createNote,
    query,
    saveNote,
    getNoteById
}