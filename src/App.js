import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Cat from "./components/Cat";



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
        <>
            <h1>First Cat App Ever</h1>
            <p>{catFact}</p>
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
        </>
        );
}



export default App;
