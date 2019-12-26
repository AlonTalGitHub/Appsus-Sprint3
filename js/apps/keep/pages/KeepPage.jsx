import AddNote from '../cmps/AddNote.jsx'
import NoteList from '../cmps/noteList.jsx'
export default class KeepPage extends React.Component {
    state = { notes: [], filterBy: { title: '', color: '', text: '' } }

    render() {
        return (
            <section>
                <AddNote />
                <NoteList />
            </section>
        )
    }
}