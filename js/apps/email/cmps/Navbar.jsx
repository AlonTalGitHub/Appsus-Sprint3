const { NavLink } = ReactRouterDOM
export default function Navbar(props){
    return <nav>
        <ul>
            <li><NavLink activeClassName="active" to='/'>Home</NavLink></li>
            <li><NavLink activeClassName="active" to='/emails'>Mister Email</NavLink></li>
            <li><NavLink activeClassName="active" to='/notes'>Notes</NavLink></li>
        </ul>
    </nav>
}