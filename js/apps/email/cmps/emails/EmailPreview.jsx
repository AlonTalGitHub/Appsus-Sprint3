const { Link } = ReactRouterDOM

export default class EmailPreview extends React.Component {

    onSelectEmail = () => {
        if (this.props.onSelectEmail)
            this.props.onSelectEmail(this.props.email);
    }

    render() {
        // const props = this.props;
        const { props } = this;
        return <Link to={`/emails/${props.email.id}`}>
            <li onClick={this.onSelectEmail}>
                <h2>{props.email.subject}</h2>
            </li>
        </Link>
    }

}