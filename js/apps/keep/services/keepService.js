'use strict'
const NOTES_KEY='notes'
//import storageService from './storageService.js'
function store(key, any) {
    localStorage[key] = JSON.stringify(any);
}

function load(key) {
    var str = localStorage[key] || 'null';
    return JSON.parse(str);
}

function createNote() {

    return {
        type: 'Text',
        isPinned: false,
        info: {},
        timeStamp: (new Date).getTime()
    }
}
function getRandomText(){
    var numOfWords=Math.floor(Math.random()*10);
    var randText='';
    var loremStr='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eveniet quasi dolore sunt consequuntur cumque! Atque cumque eos sint temporibus amet voluptatem officia iusto quod vero quos exercitationem, iure animi!'
    for (var i=0;i<numOfWords;i++){
        randText+=loremStr.split('')
    }
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
    return notes;

}