const { Link } = ReactRouterDOM

export default class EmailDetails extends React.Component {

    render() {
        const { email } = this.props;
        // console.log(this.props);
        
        // console.log(email)
        return (<div className="email-container">
            <h2>{email.subject}</h2>
            <p>{email.body}</p>
            <button onClick={this.props.goBack}>BACK</button>
            {/* <button onClick={this.onDelete}>Delete</button> */}
        </div>
        )
    }

}