export default class AddNote extends React.Component {
    render() {
        return (<div className="input-group mb-3 add-note-conatiner">
            <input type="text" className="form-control add-note-bar" placeholder="Add Note..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <button className="btn btn-outline-secondary" type="button">Button</button>
            <button className="btn btn-outline-secondary" type="button"><img src="https://img.icons8.com/metro/26/000000/picture.png"/></button>
            <button className="btn btn-outline-secondary" type="button"><img src="https://img.icons8.com/ios-filled/48/000000/youtube-play.png"/></button>
            <button className="btn btn-outline-secondary" type="button">Button</button>
        </div>)
    }
}
//<img src="https://img.icons8.com/color/48/000000/youtube-play.png"/>
/*<div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        </div>*/