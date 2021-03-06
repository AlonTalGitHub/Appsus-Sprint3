import keepService from '../services/keepService.js'
import NotePreview from "../cmps/NotePreview.jsx";
import FilterPreview from '../cmps/FilterPreview.jsx';
import SepLine from '../cmps/SepLine.jsx';
//import Filter from "../cmps/Cars/Filter.jsx";
const { Link } = ReactRouterDOM
export default class NoteList extends React.Component {
    //state = { notes: [], filterBy: { title: '', color: '', text: '' } }

    componentDidMount() {
        this.props.loadNotes();
        console.log(this.props);
    }

    // loadNotes = () => {
    //     keepService.query(this.state.filterBy).then((notes) => {
    //         this.setState({ notes });
    //     })
    // }

    // handleChange = (changeFilterField) =>{
    //     this.setState(() => ({filterBy : {...changeFilterField}}) , 
    //     this.loadNotes);
    //     //console.log(changeFilterField);
    // }

    

    render() {
        return (<div className="note-list-container">
            <FilterPreview filterBy={this.props.filterBy} handleChange={this.props.handleChange} />
            <ul className="note-list-pinned">{this.props.notes.filter(note=>{return (note.isPinned)}).map((note, index) => {
                console.log(note.isPinned)
                return <NotePreview note={note} key={index} loadNotes={this.props.loadNotes} updateNoteToEdit={this.props.updateNoteToEdit}/>
            })}</ul>
            <SepLine/>
            <ul className="note-list-unpinned">{this.props.notes.filter(note=>{return (!note.isPinned)}).map((note, index) => {
                console.log(note.isPinned)
                return <NotePreview note={note} key={index} loadNotes={this.props.loadNotes} updateNoteToEdit={this.props.updateNoteToEdit}/>
            })}</ul>
        </div>
        );
    }
}

{/* <FilterPreview filterBy={this.props.filterBy} handleChange={this.props.handleChange}/>
            <ul>{this.props.notes.map((note, index) => {
                console.log(note)
                return <NotePreview note={note} key={index}/>
            })}</ul> */}


{/* <Filter filterBy={this.state.filterBy} handleChange={this.handleChange}></Filter>

{ this.state.cars.map(car => <CarPreview car={car} key={car.id}></CarPreview>) } */}
// export default class noteList extends React.Component {

//     render() {
//         return (
//             <section>
//                 <AddNote />
//             </section>
//         )
//     }
// }


