import Home from './js/apps/email/pages/Home.jsx'
import EmailList from './js/apps/email/pages/EmailList.jsx'
import KeepPage from './js/apps/keep/pages/KeepPage.jsx'
import Navbar from './js/apps/email/cmps/Navbar.jsx'
import EmailDetails from './js/apps/email/pages/EmailDetails.jsx'
import EmailPage from './js/apps/email/pages/EmailPage.jsx'
import EmailApp from './js/apps/email/pages/EmailApp.jsx'
import EmailCompose from './js/apps/email/cmps/emails/EmailCompose.jsx'

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
                        <Route path="/emails" component={EmailApp} exact></Route>
                        <Route path="/emails/:id" component={EmailPage} exact></Route>
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