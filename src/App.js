import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Cat from "./components/Cat";



function App() {
    const [catFact, setCatFact] = useState([]);

    async function throwCatFacts() {
        try {
            const response = await axios.get(`https://cat-fact.herokuapp.com/facts`);
            console.log(response.data);
            setCatFact(response.data[0].text);
            console.log(catFact);
        } catch (e) {
            console.error(e);
        }
    }

    //function call
    useEffect(() => {
        throwCatFacts();
    }, []);


    return (
        <>
            <h1>First Cat App Ever</h1>
            <p>{catFact}</p>
        </>
        );

}

export default App;


// nu moet ik alle vijf object-onderdelen uit de array zien te implementeren op de pagina.