// label: "How was it:", todos: [
//     { txt: "Do that", doneAt: null },
//     { txt: "Do this", doneAt: 187111111 }]
export default class Note {
    constructor(type, isPinned, color) {
        this.id = genId()
        this.type = type
        this.isPinned = isPinned
        this.timeStamp = (new Date).getTime()
        this.backgroundColor = color
        switch (type) {
            case 'NoteText':
                this.info = { title: '', text: '' }
                break;
            case 'NoteImage':
                this.info = { title: '', url: '' }
                break;
            case 'NoteToDos':
                this.info = { title: '', todos: [] }
                break;
            default:
            case 'NoteText':
                this.info = { title: '', text: '' }
                break;
        }
    }
}

function genId() {
    var charStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'
    var numOfChars = Math.floor(1 + Math.random() * 10);
    var id = charStr.split('')[Math.floor(0 + Math.random() * 25)];
    for (var i = 0; i < 10; i++) {
        id += charStr.split('')[Math.floor(0 + Math.random() * (charStr.length - 1))];
    }
    return id;
}
