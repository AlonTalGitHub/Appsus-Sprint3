import emailService from '../services/emailService.js'
import EmailDetails from '../pages/EmailDetails.jsx'

export default class EmailPage extends React.Component {

    // state = {
    //     pet: null
    // }
    // componentDidMount() {
    //     this.loadPet();
    // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.id
    //         !== this.props.match.params.id) {
    //         this.loadPet();
    //     }
    // }

    // loadPet() {
    //     console.log(this.props)
    //     const { id } = this.props.match.params;
    //     petsService.getPetById(id).then(pet => {
    //         this.setState({ pet })
    //     })
    // }

    // goBack = () => {
    //     this.props.history.push('/pets')
    //     // this.props.history.goBack()
    // }

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
        if (!this.state.pet) return <div className="loading">Loading...</div>
        return <PetDetails pet={this.state.pet} onAddNickname={this.onAddNickname} goBack={this.goBack}></PetDetails>
    }
}