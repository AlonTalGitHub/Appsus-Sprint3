const { Link } = ReactRouterDOM

export default class EmailDetails extends React.Component {

    componentDidMount() {
        this.props.onSetRead(this.props.email);
    }

    render() {
        const { email } = this.props;

        return (<div className="email-container">
            <h2>{email.subject}</h2>
            <p>{email.body}</p>
            <button onClick={this.props.goBack}>BACK</button>
            <button onClick={() => this.props.onDelete(email)}>Delete</button>
        </div>
        )
    }

}