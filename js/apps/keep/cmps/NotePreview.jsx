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
import keepService from '../services/keepService.js'
import ModalScreen from './ModalScreen.jsx'
export default function NotePreview(props) {
    function onTogglePin(ev) {
        if (props.note.isPinned) {
            ev.target.classList.remove('pushed')
            keepService.notePinToggle(props.note)
        }
        else {
            ev.target.classList.add('pushed')
            keepService.notePinToggle(props.note)
        }
        props.loadNotes();
    }
    function onDeleteNote() {
        keepService.deleteNote(props.note);
        props.loadNotes();
    }
    function configPin() {
        if (!props.note.isPinned) return <div className="note-pin" onClick={onTogglePin}>🖈</div>
        else return <div className="note-pin" onClick={onTogglePin}>📌</div>
    }
    function onChangeColor(ev){
        let newColor=ev.target.value;
        //props.note.backgroundColor=newColor;
        keepService.updateNoteColor(props.note,ev.target.value);
        props.loadNotes();
    }
    function onChangeContent(ev){
        let oldNoteId=props.note.id;
        keepService.deleteNote(props.note);
    //     let NoteDetails={type:'NoteText',title:'fakeNote',noteContent:'fakeContent'}
    //     let newNote= keepService.saveNote(NoteDetails)
    //   // let newNote= keepService.createNote('NoteText','fakeNote','fakeContent',false)
    //     newNote.then((res) => {
    //         console.log(res)
    //         res.id=oldNoteId;
    //         props.loadNotes(res) });
            props.updateNoteToEdit(oldNoteId);
       //newNote.then(f=>{id=oldNoteId;})
      // props.loadNotes();
    }
    // style={{ backgroundColor: props.note.backgroundColor, border="0", cellspacing="50px" }}
    // <ModalScreen/>
    return (<li id={props.note.id}>
       
        <table className="note-container" style={{ backgroundColor: props.note.backgroundColor }}>
            <thead>
                <tr className="note-head">
                    <td className="note-trash-bin" onClick={onDeleteNote}>🗑️</td>
                    <td className="note-head-title">{props.note.info.title}</td>
                    <td>{configPin()} </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td ></td>
                    <td><div className="note-content">{props.note.info.text}</div></td>
                    <td ></td>
                </tr>
                <tr className="note-edit-container">
                    <td>
                    </td>
                    <td>
                        <div className="note-edit-btns">
                            <div className="note-edit-btn color">color<input type="color" style={{position:'absolute',left: '0',top: '0',opacity:'0',cursor:'pointer'}} onChange={onChangeColor}/></div>
                            <div className="note-edit-btn" onClick={onChangeContent}>content</div>
                        </div>
                    </td>
                    <td>
                    </td>
                </tr>
            </tbody>
        </table>
    </li>) // style={{ color: props.car.color }}
}