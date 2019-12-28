// const newNote = createNote(NoteDetails.type,
//     NoteDetails.title,
//     NoteDetails.userInput,
//     NoteDetails.isPinned)
//switch (type) {
//     case 'NoteText':
//         this.info = { title: '', text: '' }
//         break;
//     case 'NoteImage':
//         this.info = { title: '', url: '' }
//         break;
//     case 'NoteToDos':
//         this.info = { title: '', todos: [] }
//         break;
//     default:
//     case 'NoteText':
//         this.info = { title: '', text: '' }
//         break;
// }
import keepService from '../services/keepService.js'
export default class AddNote extends React.Component {
    handleSave = (event) => {
        var newNote = document.querySelector('input.note-add-bar')
        var noteTitle = newNote.value.split(':')[0]
        var noteContent = newNote.value.split(':')[1]
        var noteDetails = {
            type: event.target.value,
            title: noteTitle,
            noteContent: noteContent,
            isPinned: false
        }
        var NOTE = keepService.saveNote(noteDetails);
        NOTE.then((res) => { this.props.updateNotes(res) });
        return noteDetails;
    }
    render() {
        return (<div className="input-group mb-3 note-add-container">
            <input type="text" className="note-add-bar" placeholder="Add Note..." />
            <button className="" type="button" onClick={this.handleSave} value='NoteText'>text</button>
            <button className="" type="button" value='NoteImage' onClick={this.handleSave}>media</button>
            <button className="" type="button" value='NoteImage' onClick={this.handleSave}>sound</button>
            <button className="" type="button" value='NoteToDos' onClick={this.handleSave}>todo</button>
        </div>)
    }
}
//<img src="https://img.icons8.com/color/48/000000/youtube-play.png"/>
{/* <img src="https://img.icons8.com/metro/26/000000/picture.png"/> */ }
{/* <img src="https://img.icons8.com/ios-filled/48/000000/youtube-play.png"/> */ }
/*<div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        </div>*/