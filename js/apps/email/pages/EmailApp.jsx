import emailService from "../services/emailService.js"
import EmailList from "../pages/EmailList.jsx";
import Filter from "../cmps/emails/Filter.jsx"
import Sidebar from "../cmps/Sidebar.jsx";
import EmailCompose from "../cmps/emails/EmailCompose.jsx";
const { Link } = ReactRouterDOM

export default class EmailApp extends React.Component {
    state = {
        emails: [],
        filterBy : {
            subject: '',
            body: ''
        },
        isComposing: false
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails = ()=>{
        console.log(this.state.filterBy);
        emailService.query(this.state.filterBy).then((emails) => {
            this.setState({ emails });
        })
    }

    onFilter = (filterBy) =>{
        this.setState(prevState => ({filterBy: {...prevState.filterBy, ...filterBy}}) , this.loadEmails);
    }

    setFolder = (folder) =>{
        if (folder === 'starred') {
            emailService.getStarred().then((emails) => {
                this.setState({ emails });
            })
        }
        if (folder === 'inbox') this.loadEmails();
    }

    toggleCompose = () => {
        this.setState((prevState) => ({
            isComposing: !prevState.isComposing
        }))
    }

    render() {
        return <React.Fragment>
            <Filter onFilter={this.onFilter}></Filter>

            {this.state.isComposing && <EmailCompose></EmailCompose>}
            <Sidebar toggleCompose={this.toggleCompose} setFolder={this.setFolder}></Sidebar>
            <EmailList emails={this.state.emails}></EmailList>
        </React.Fragment>
    }
}