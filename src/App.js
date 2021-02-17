import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Error, Signin, Signup, Demo, Dashboard } from './pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useUserContext } from './context/user_context';
function App() {
  const { user } = useUserContext();

  return (
    <Router>
      <div className='container-small'>
        <Navbar />
        <Switch>
          {/* HOME PAGE / LANDING PAGE */}
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          {/* DEMO */}
          <Route exact path='/demo' component={Demo} />
          <Route exact path='/demo/:chatId' component={Demo} />

          {/* END DEMO */}
          <Route exact path='*' component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
