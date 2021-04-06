import './stylesheets/App.css';
import './fonts/fonts.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";



function App() {
    const [catFact, setCatFact] = useState([]);
    const [number, setNumber] = useState(0);

    async function throwCatFacts() {
        try {
            const response = await axios.get(`https://cat-fact.herokuapp.com/facts`);
            console.log(response.data);
            setCatFact(response.data[number].text);
            console.log(catFact);
        } catch (e) {
            console.error(e);
        }
    }

    //function call
    useEffect(() => {
        throwCatFacts();
    }, [number]);


    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route exact path="/">
            <p>{catFact}</p>

                    <div className="button-container">
            <button
                type="button"
                disabled={number === 0}
                onClick={()=> {setNumber(number-1)}}
            >
                purr-evious fact
            </button>
            <button
                type="button"
                disabled={number === 4}
                onClick={()=>  {setNumber(number+1)}}
            >
                next fact
            </button>
                </div>
                </Route>
            </Switch>
        </Router>
        );
}



export default App;
