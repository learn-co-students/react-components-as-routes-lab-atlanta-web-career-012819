import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {

    // Can be used instead of importing NavBar
    // let navBar = () => {
    //     <div>
    //         <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Home</NavLink>
    //         <NavLink to="/actors" exact style={link} activeStyle={{background: 'darkblue'}}>Actors</NavLink>
    //         <NavLink to="/directors" exact style={link} activeStyle={{ background: 'darkblue' }}>Directors</NavLink>
    //         <NavLink to="/movies" exact style={link} activeStyle={{ background: 'darkblue' }}>Movies</NavLink>
    //     </div>;
    // }
    /* set exact so it knows to only set activeStyle when route is deeply equal to link */
    /* add styling to Navlink */
    /* add prop for activeStyle */

    return (
        <Router>
            <React.Fragment>
                <NavBar />
                <Route exact path="/" component={Home} />
                <Route exact path="/actors" component={Actors} />
                <Route exact path="/directors" component={Directors} />
                <Route exact path="/movies" component={Movies} />
            </React.Fragment>
        </Router>
    );
};

export default App


