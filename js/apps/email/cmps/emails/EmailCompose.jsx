import emailService from "../../services/emailService.js";
// import eventBusService from "../services/eventBusService.js";

export default class EmailCompose extends React.Component{
    state={
        subject:'',
        body:''
    }

    inputChange = (ev)=>{
        ev.preventDefault();
        const field =  ev.target.name
        const value =  ev.target.value
        this.setState({[field]: value})
    }

    onSendEmail=(ev)=>{
        ev.preventDefault();
        const { props } = this;
        props.toggleCompose();
        emailService.addEmail({...this.state}).then(email=>{
            props.onCompose();
            console.log(props);
            // eventBusService.emit('toggleModal' , email);
            // this.props.history.push("/emails")
        })
    }

    render() {
        return <form  className="mail-compose">
            <input type="text" value={this.state.subject} name="subject" onChange={this.inputChange} placeholder="subject"></input>
            <input type="text" value={this.state.body} name="body" onChange={this.inputChange}></input>
            <button className="email-send-btn" onClick={this.onSendEmail}>Send</button>
        </form>
    }
}