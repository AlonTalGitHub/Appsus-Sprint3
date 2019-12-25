import Home from './js/apps/email/pages/Home.jsx'
import EmailListPage from './js/apps/email/pages/EmailListPage.jsx'
import KeepPage from './js/apps/keep/pages/KeepPage.jsx'
import Navbar from './js/apps/email/cmps/Navbar.jsx'

const Router = ReactRouterDOM.HashRouter
const { Switch, Link, Route } = ReactRouterDOM
const { createBrowserHistory } = History

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Navbar></Navbar>
                <main>
                    <Switch>
                        <Route path="/" component={Home} exact></Route>
                        <Route path="/emails" component={EmailListPage} exact></Route>
                        <Route path="/notes" component={KeepPage} exact></Route>
                    </Switch>
                </main>
            </Router>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)