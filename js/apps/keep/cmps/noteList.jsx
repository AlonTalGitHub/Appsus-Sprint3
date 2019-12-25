import KeepService from '../services/keepService.js'
// export default class noteList extends React.Component {

//     render() {
//         return (
//             <section>
//                 <AddNote />
//             </section>
//         )
//     }
// }

export default function NumberList() {
    const notes = KeepService.getNotes();
    const listItems = notes.map((note,index) =>
      <li key={index.toString()}>
        {note.info.text}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }