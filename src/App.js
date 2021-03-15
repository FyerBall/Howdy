import './index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter,
} from 'react-router-dom'
import { Home, Error, Signin, Signup, Demo } from './pages'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useEffect } from 'react'

// react-router scroll to top on every transition
function _ScrollToTop(props) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className='container-small'>
          <Navbar />
          <Switch>
            {/* HOME PAGE / LANDING PAGE */}
            <Route exact path='/' component={Home} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/signup' component={Signup} />
            {/* DEMO */}
            <Route exact path='/demo/' component={Demo} />
            <Route exact path='/demo/:chatId' component={Demo} />
            <Route exact path='/demo/dashboard' component={Demo} />

            {/* END DEMO */}
            <Route exact path='*' component={Error} />
          </Switch>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  )
}

export default App
