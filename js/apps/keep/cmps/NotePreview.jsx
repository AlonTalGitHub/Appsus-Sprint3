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
    function onChangeColor(ev) {
        let newColor = ev.target.value;
        //props.note.backgroundColor=newColor;
        keepService.updateNoteColor(props.note, ev.target.value);
        props.loadNotes();
    }
    function onChangeContent(ev) {
        let oldNoteId = props.note.id;
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
    function getCurrContent() {
        var contentKey
        const temp = props.note.info
        switch (props.note.type) {
            case 'NoteText':
                contentKey = 'text';
                return temp[contentKey];
            case 'NoteImage':
                // contentKey = 'url';
                // return (<img src={temp[contentKey]}/>);
                contentKey = 'url';
                //return temp[contentKey];
                return (<img src={temp[contentKey]} style={{ width: '100px', height: '100px', marginLeft: '20px' }} />);
            case 'NoteToDos':
                contentKey = 'todos';
                return (<ul>
                    {temp[contentKey].map(todo => { return <li className="note-todo-item">{todo.description}</li> })}
                </ul>)
            //return temp[contentKey];
            default:
            case 'NoteText':
                contentKey = 'text';
                return temp[contentKey];
        }
        // const temp = props.note.info
        // return temp[contentKey];
    }
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
                    <td><div className="note-content">{getCurrContent()}</div></td>
                    <td ></td>
                </tr>
                <tr className="note-edit-container">
                    <td>
                    </td>
                    <td>
                        <div className="note-edit-btns">
                            {/* <div className="note-edit-btn color">color<input type="color" style={{ position: 'absolute', left: '0', top: '0', opacity: '0', cursor: 'pointer' }} onChange={onChangeColor} /></div> */}
                            {/* <div className="note-edit-btn" onClick={onChangeContent}>Edit</div> */}
                            <div style={{
                                height: '100 %',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <button class="note-edit-btn" style={{
                                    width: '60px',
                                    height: '30px',
                                    fontFamily: 'Roboto sans-serif',
                                    fontSize: '8px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2.5px',
                                    fontWeight: '500',
                                    color: '#000',
                                    backgroundColor: '#fff',
                                    border: 'none',
                                    borderRadius: '45px',
                                    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
                                    transition: 'all 0.3s ease 0s',
                                    cursor: 'pointer',
                                    outline: 'none',
                                }} onClick={onChangeContent}>EDIT</button>
                            </div>
                            <div style={{
                                height: '100 %',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <button class="note-edit-btn" style={{
                                    width: '60px',
                                    height: '30px',
                                    fontFamily: 'Roboto sans-serif',
                                    fontSize: '8px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2.5px',
                                    fontWeight: '500',
                                    color: '#000',
                                    backgroundColor: '#fff',
                                    border: 'none',
                                    borderRadius: '45px',
                                    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
                                    transition: 'all 0.3s ease 0s',
                                    cursor: 'pointer',
                                    outline: 'none',
                                }} ><input type="color" style={{ position: 'absolute', left: '0', top: '0', opacity: '0', cursor: 'pointer' }} onChange={onChangeColor} />COLOR</button>
                            </div>

                        </div>
                    </td>
                    <td>
                    </td>
                </tr>
            </tbody>
        </table>
    </li >) // style={{ color: props.car.color }}
}