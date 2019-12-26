import keepService from '../services/keepService.js'
import NotePreview from "../cmps/NotePreview.jsx";
import FilterPreview from '../cmps/FilterPreview.jsx';
//import Filter from "../cmps/Cars/Filter.jsx";
const { Link } = ReactRouterDOM
export default class NoteList extends React.Component {
    state = { notes: [], filterBy: { title: '', color: '', text: '' } }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        keepService.query(this.state.filterBy).then((notes) => {
            this.setState({ notes });
        })
    }

    handleChange = (changeFilterField) =>{
        this.setState(() => ({filterBy : {...changeFilterField}}) , 
        this.loadNotes);
        //console.log(changeFilterField);
    }

    render() {
        return (<div>
            <FilterPreview filterBy={this.filterBy} handleChange={this.handleChange}/>
            <ul>{this.state.notes.map((note, index) => {
                console.log(note)
                return <NotePreview note={note} key={index}/>
            })}</ul></div>
        );
    }
}



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


