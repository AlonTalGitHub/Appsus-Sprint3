const { NavLink } = ReactRouterDOM
export default function Navbar(props){
    return <nav className="main-nav container flex space-between align-center">
        <NavLink className="main-logo" activeClassName="active" to='/'>Appsus</NavLink>
        <ul className="main-menu flex clean-list">
            <li><NavLink activeClassName="active" to='/emails'>Misteremail</NavLink></li>
            <li><NavLink activeClassName="active" to='/notes'>Notes</NavLink></li>
        </ul>
    </nav>
}