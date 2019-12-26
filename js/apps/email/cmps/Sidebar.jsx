const { NavLink } = ReactRouterDOM
export default function Sidebar(props){
    return <nav>
        <ul className = "sidebar-list">
            <li><button onClick = {props.toggleCompose}>+ Compose</button></li>
            <li><button onClick = {() => props.setFolder('inbox')}>Inbox</button></li>
            <li><button onClick = {() => props.setFolder('starred')}>Starred</button></li>
            <li><button onClick = {() => props.setFolder('sent')}>Sent</button></li>
        </ul>
    </nav>
}