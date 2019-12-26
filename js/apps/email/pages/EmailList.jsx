import EmailPreview from "../cmps/emails/EmailPreview.jsx";


export default function EmailsList(props) {
    return <ul>{props.emails.map((email , i)=><EmailPreview key={i} email={email}></EmailPreview>)}</ul>
}