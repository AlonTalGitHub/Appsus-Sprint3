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
export default function NotePreview(props) {
    return (<li>
        <div className="note-container">
            <span>{props.note.info.title}</span>
            <div className="note-content-container">
                <pre>{props.note.info.text}</pre>
            </div>
        </div>
    </li>) // style={{ color: props.car.color }}
}