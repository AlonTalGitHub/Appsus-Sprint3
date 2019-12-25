import emailService from "../services/emailService.js"
import EmailPreview from "../cmps/emails/EmailPreview.jsx";
const { Link } = ReactRouterDOM

export default class EmailList extends React.Component {
    state = {emails: []}

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
            {this.state.emails.map(email=><EmailPreview email={email} key={email.id}></EmailPreview>)}
        </React.Fragment>
    }
}