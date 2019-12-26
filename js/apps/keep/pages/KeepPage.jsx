import AddNote from '../cmps/AddNote.jsx'
import NoteList from '../cmps/noteList.jsx'
export default class KeepPage extends React.Component {

    render() {
        return (
            <section>
                <AddNote />
                <NoteList/>
            </section>
        )
    }
}