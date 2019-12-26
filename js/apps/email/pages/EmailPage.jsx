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
        console.log(this.props)
        const { id } = this.props.match.params;
        emailService.getEmailById(id).then(email => {
            this.setState({ email })
        })
    }

    goBack = () => {
        this.props.history.push('/emails')
        // this.props.history.goBack()
    }

    // onDelete = (pet)=>{
    //     petsService.deletePet(pet).then(()=>{
    //         this.props.history.push('/pets')
    //     });
    // }
    
    // onAddNickname =(name)=>{
    //     petsService.addNickname(this.state.pet.id , name).then(pet=>{
    //         this.setState({ pet })
    //     })
    // }


    render() {
        console.log(this.state.email)
        if (!this.state.email) return <div className="loading">Loading...</div>
        return <EmailDetails email={this.state.email} goBack={this.goBack}></EmailDetails>
    }
}