import AddNote from '../cmps/AddNote.jsx'
import NoteList from '../cmps/noteList.jsx'
import Video from '../cmps/Video.jsx'
import ModalScreen from '../cmps/ModalScreen.jsx'
import keepService from '../services/keepService.js'
export default class KeepPage extends React.Component {
    state = { notes: [], filterBy: { title: '', color: '', text: '' } }
    loadNotes = () => {
        keepService.query(this.state.filterBy).then((notes) => {
            this.setState(this.state.notes = notes);
        })
        // notes.forEach(note=>{note.classList.contains('pushed')})

        // if(ev.target.classList.contains('pushed')){
        //     ev.target.innerText= '📌';
        //     props.note.isPinned=true;
        //   }
        //   else{
        //     ev.target.innerText='🖈';
        //     props.note.isPinned=false;
        //   }
    }

    handleChange = (changeFilterField) => {
        this.setState(() => ({ filterBy: { ...changeFilterField } }),
            this.loadNotes);
        //console.log(changeFilterField);
    }
    // saveNote = (note) => {
    //     keepService.query(this.state.filterBy).then((notes) => {
    //         this.setState(this.state.notes=notes);
    //     })
    // }
    render() {
        return (
            <section className="note-section">
                <Video />
                <AddNote updateNotes={this.loadNotes} />
                <NoteList handleChange={this.handleChange} loadNotes={this.loadNotes} notes={this.state.notes} filterBy={this.state.filterBy} />
            </section>
        )
    }
}