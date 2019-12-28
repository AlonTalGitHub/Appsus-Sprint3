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
        {props.note.info.title}
        </div>
        </li>) // style={{ color: props.car.color }}
}