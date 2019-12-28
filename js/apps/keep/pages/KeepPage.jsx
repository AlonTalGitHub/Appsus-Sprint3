import AddNote from '../cmps/AddNote.jsx'
import NoteList from '../cmps/noteList.jsx'
import keepService from '../services/keepService.js'
export default class KeepPage extends React.Component {
    state = { notes: [], filterBy: { title: '', color: '', text: '' } }
    loadNotes = () => {
        keepService.query(this.state.filterBy).then((notes) => {
            this.setState(this.state.notes=notes);
        })
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
            <section>
                <AddNote updateNotes={this.loadNotes}/>
                <NoteList handleChange={this.handleChange} loadNotes={this.loadNotes} notes={this.state.notes} filterBy={this.state.filterBy} />
            </section>
        )
    }
}