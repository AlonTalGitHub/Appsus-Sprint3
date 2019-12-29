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

    // componentDidUpdate() {
    //     this.loadEmails()
    // }

    loadEmails = ()=>{
        console.log('loading emails');
        
        emailService.query(this.state.filterBy).then((emails) => {            
            this.setState({ emails });
        })
        this.setFolder('inbox')
    }

    onFilter = (filterBy) =>{
        this.setState(prevState => ({filterBy: {...prevState.filterBy, ...filterBy}}) , this.loadEmails);
    }

    setFolder = (folder) =>{
        console.log('set folder');
        
        emailService.getEmailsToRender(folder).then((emails) => {
            this.setState({ emails });
        })
    }

    toggleCompose = () => {
        this.setState((prevState) => ({
            isComposing: !prevState.isComposing
        }))
    }

    onCompose = () => {
        this.loadEmails()
    }

    render() {
        return <React.Fragment>
            <Filter onFilter={this.onFilter}></Filter>
            {this.state.isComposing && <EmailCompose toggleCompose={this.toggleCompose} onCompose={this.onCompose}></EmailCompose>}
            <div className="email-main-content">
                <Sidebar toggleCompose={this.toggleCompose} setFolder={this.setFolder}></Sidebar>
                <EmailList emails={this.state.emails}></EmailList>
            </div>
        </React.Fragment>
    }
}