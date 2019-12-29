export default class NoteModalWindow extends React.Component {
    getUserInput = () => {
        let type = document.querySelector('#note-type-modal')
        let title = document.querySelector('#note-title-modal')
        let content = document.querySelector('#note-content-modal')
        let contentKey;
        switch (type.value) {
            case 'NoteText':
                contentKey ='text'
                break;
            case 'NoteImage':
                contentKey ='url'
                break;
            case 'NoteToDos':
                contentKey ='todos'
                break;
            default:
            case 'NoteText':
                contentKey ='text'
                break;
        }

        let userData = {
            type:type.value,
            title: title.value,
        }
        userData[contentKey]=content.value
        console.log('userData',userData)
        this.props.updateNote(userData)
    }

    render() {
        return (<div className="note-modal-window" >
            <span className="note-modal-head">Edit</span>
            <span>Type</span>
            <select id="note-type-modal" style={{ margin: '15px' }}>
                <option value="NoteText">Text</option>
                <option value="NoteImage">Media</option>
                <option value="NoteToDos">Todo</option>
            </select>
            <span>Title</span>
            <input type="text" id="note-title-modal" style={{ margin: '15px' }} />
            <span>Content (use commas for Todo)</span>
            <input type="text" id="note-content-modal" style={{ margin: '15px' }} />
            <div className="note-edit-btn-OK" onClick={this.getUserInput}>OK</div>
        </div>)
    }

}

//     case 'NoteImage':
//         this.info = { title: '', url: '' }
//         break;
//     case 'NoteToDos':