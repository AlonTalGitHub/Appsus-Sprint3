'use strict'
const NOTES_KEY='notes'
//import storageService from './storageService.js'
function store(key, any) {
    localStorage[key] = JSON.stringify(any);
}
var gNotes=[];
function load(key) {
    var str = localStorage[key] || 'null';
    return JSON.parse(str);
}

function createNote() {

    return {
        type: 'Text',
        isPinned: false,
        info: {
            url:null,
            title:null,
            text:getRandomText()
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
    if (!load(NOTES_KEY)) {
        for (var i = 0; i < numOfNotes; i++) {
            notes.push(createNote());
        }
        store(NOTES_KEY, notes)
    }
    else notes = load(NOTES_KEY);
    gNotes=notes;
    return notes;
}

function getNotes(){
    return Promise.resolve(gNotes);
}
export default {
    getNotes,
    createNotes,
    createNote
}