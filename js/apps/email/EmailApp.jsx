import Home from './pages/Home.jsx'
import EmailListPage from './pages/EmailListPage.jsx'
import Navbar from './cmps/Navbar.jsx'

const Router = ReactRouterDOM.HashRouter
const { Switch, Link, Route } = ReactRouterDOM
const { createBrowserHistory } = History

class EmailApp extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Navbar></Navbar>
                <main>
                    <Switch>
                        <Route path="/" component={Home} exact></Route>
                        <Route path="/emails" component={EmailListPage} exact></Route>
                    </Switch>
                </main>
            </Router>
        )
    }
}

ReactDOM.render(
    <EmailApp />,
    document.getElementById('root')
)