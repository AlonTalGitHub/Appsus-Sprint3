import emailService from '../services/emailService.js'
import EmailDetails from '../pages/EmailDetails.jsx'

export default class EmailPage extends React.Component {

    state = {
        email: null
    }
    componentDidMount() {
        this.loadEmail();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadEmail();
        }
    }

    loadEmail() {
        const { id } = this.props.match.params;
        emailService.getEmailById(id).then(email => {
            this.setState({ email })
        })
    }

    goBack = () => {
        this.props.history.push('/emails')
        // this.props.history.goBack()
    }

    onDelete = (email) => {
        emailService.deleteEmail(email).then(()=>{
            this.props.history.push('/emails')
        });
    }

    onSetRead = (email) => {
        emailService.setRead(email).then(()=>{
        });
    }
    
    render() {
        if (!this.state.email) return <div className="loading">Loading...</div>
        return <EmailDetails email={this.state.email} onSetRead={this.onSetRead} onDelete={this.onDelete} goBack={this.goBack}></EmailDetails>
    }
}