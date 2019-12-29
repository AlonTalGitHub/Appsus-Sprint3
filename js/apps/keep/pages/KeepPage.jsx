import AddNote from '../cmps/AddNote.jsx'
import NoteList from '../cmps/noteList.jsx'
import Video from '../cmps/Video.jsx'
import ModalScreen from '../cmps/ModalScreen.jsx'
import NoteModalWindow from '../cmps/NoteModalWindow.jsx'
import keepService from '../services/keepService.js'
export default class KeepPage extends React.Component {
    state = { notes: [], filterBy: { title: '', color: '', text: '' }, modalScreenFlag: false, noteToEdit: {} }
    loadNotes = () => {
        keepService.query(this.state.filterBy).then((notes) => {
            console.log(notes);
            this.setState(this.state.notes = notes);
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
    setModal = () => {
        this.setState(() => {
            console.log('flag is ', this.state.modalScreenFlag)
            this.state.modalScreenFlag = !this.state.modalScreenFlag
            console.log('flag is ', this.state.modalScreenFlag)
            return this.state.modalScreenFlag;
        })
    }
    blah = () => {
        console.log('blah')
    }

    updateNote = (userDataObj) => {
        //this.setModal();
        // console.log(this.state.noteToEdit)
        // this.state.noteToEdit.info = userDataObj
        // console.log(this.state.noteToEdit)
        keepService.updateNote(this.state.noteToEdit,userDataObj)
        .then(this.loadNotes).then(this.setModal)
        // keepService.saveNote(userDataObj).then((res) => {
        //     console.log(res)
        //     res.id = this.state.noteToEdit.id
        // }).then(this.loadNotes).then(this.setModal)
        // this.loadNotes()
        // this.setModal()
        // this.setState(prevState => ({noteToEdit : {...prevState.noteToEdit , ...userDataObj}}) , 
        // this.loadNotes,this.setModal);
        //
        //   let NoteDetails={type:'NoteText',title:'fakeNote',noteContent:'fakeContent'}
        //   let newNote= keepService.saveNote(NoteDetails)
        // // let newNote= keepService.createNote('NoteText','fakeNote','fakeContent',false)
        //   newNote.then((res) => {
        //       console.log(res)
        //       res.id=oldNoteId;
        //       props.loadNotes(res) });
        //       props.updateNoteToEdit(oldNoteId);
    }
    updateNoteToEdit = (noteId) => {
        // let NotePromise = keepService.getNoteById(noteId)
        //   let newNote= keepService.saveNote(NoteDetails)
        let newNote = keepService.createNote('NoteText', 'fakeNote', 'fakeContent', false)
        //    newNote.then((res) => {
        //        console.log(res)
        //        res.id=oldNoteId;
        //        this.setState((res) =>{this.state.noteToEdit=res
        //     return this.state.noteToEdit
        //     })})
        //    .catch('error')
        this.setState(() => {
            newNote.id = noteId;
            this.state.noteToEdit = newNote
        }, this.setModal)
        //       props.loadNotes(res) });
        //       props.updateNoteToEdit(oldNoteId);
    }
    toggleModal = (value) => {
        if (value) {
            return (
                <div>
                    <ModalScreen />
                    <NoteModalWindow updateNote={this.updateNote} />
                </div>)
        }
        else {

            return (<div></div>)
        }

    }
    render() {
        return (
            <section className="note-section">
                {this.toggleModal(this.state.modalScreenFlag)}
                <Video />
                <AddNote loadNotes={this.loadNotes} />
                <NoteList handleChange={this.handleChange} loadNotes={this.loadNotes} notes={this.state.notes} filterBy={this.state.filterBy} updateNoteToEdit={this.updateNoteToEdit} />
            </section>
        )
    }
}