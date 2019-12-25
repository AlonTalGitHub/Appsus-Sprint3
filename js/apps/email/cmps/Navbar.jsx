const { NavLink } = ReactRouterDOM
export default function Navbar(props){
    return <nav>
        <ul>
            <li><NavLink activeClassName="active" to='/'>home</NavLink></li>
            <li><NavLink activeClassName="active" to='/emails'>Emails</NavLink></li>
            <li><NavLink activeClassName="active" to='/add'>New Email</NavLink></li>
        </ul>
    </nav>
}