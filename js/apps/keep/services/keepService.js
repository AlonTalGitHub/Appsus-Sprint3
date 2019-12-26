'use strict'
const NOTES_KEY='notes'
import storageService from './storageService.js'
// function store(key, any) {
//     localStorage[key] = JSON.stringify(any);
// }
var gNotes=[];
// function load(key) {
//     var str = localStorage[key] || 'null';
//     return JSON.parse(str);
// }
function genId(){
    var charStr='ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'
    var numOfChars=Math.floor(1+Math.random()*10);
    var id=charStr.split('')[Math.floor(0+Math.random()*25)];
    for (var i=0;i<10;i++){
        id+=charStr.split('')[Math.floor(0+Math.random()*(charStr.length-1))];
    }
return id;
}
function createNote() {

    return {
        id:genId(),
        type: 'Text',
        isPinned: false,
        info: {
            url:'',
            title:'',
            text:getRandomText(),
            color:''
        },
        timeStamp: (new Date).getTime()
    }
}

function getRandomText(){
    var numOfWords=Math.floor(1+Math.random()*10);
    var randText='';
    var loremStr='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eveniet quasi dolore sunt consequuntur cumque! Atque cumque eos sint temporibus amet voluptatem officia iusto quod vero quos exercitationem, iure animi!'
    for (var i=0;i<numOfWords;i++){
        randText+=loremStr.split(' ')[i]+' ';
    }
return randText;
}
function createNotes(numOfNotes) {
    var notes = [];
    if (!storageService.load(NOTES_KEY)) {
        for (var i = 0; i < numOfNotes; i++) {
            notes.push(createNote());
        }
        storageService.store(NOTES_KEY, notes)
    }
    else notes = storageService.load(NOTES_KEY);
    gNotes=notes;
    return notes;
}

function getNotes(){
    return Promise.resolve(gNotes);
}

function query(filterBy){
    // if (filterBy) return Promise.resolve(gNotes.filter(note=>{
    //     return note.info.title.includes(filterBy.title) || note.info.text.includes(filterBy.text) || note.info.color.includes(filterBy.color)
    // }))
    if (gNotes.length===0) createNotes(8);
    return Promise.resolve([...gNotes]);
}

function getNoteById(id){
    const note = gNotes.find(note=>note.id === id)
    return Promise.resolve({...note})
}

function saveNote(NoteDetails){;
    const newNote = createNote()//new Car(carDetails.name , carDetails.color) //reminder:do it with a class and a constructor
    newNote.isPinned=NoteDetails.isPinned;
    newNote.type=NoteDetails.type;
    newNote.info.title=NoteDetails.title;
    newNote.info.text=NoteDetails.text;
    newNote.info.url=NoteDetails.url;
    newNote.info.color=NoteDetails.color;
    gNotes =  [...gNotes , newNote];
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