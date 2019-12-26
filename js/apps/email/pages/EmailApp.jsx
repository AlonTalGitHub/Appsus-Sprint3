import emailService from "../services/emailService.js"
import EmailList from "../pages/EmailList.jsx";
const { Link } = ReactRouterDOM

export default class EmailApp extends React.Component {
    state = {
        emails: []
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails = ()=>{
        console.log('Emails loading...');
        emailService.query().then((emails) => {
            this.setState({ emails });
        })

    }

    render() {
        return <React.Fragment>
            {console.log(this.state.emails)}
            <EmailList emails={this.state.emails}></EmailList>
        </React.Fragment>
    }
}