import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Cat ({object}) {
    console.log(object);
    const [singleCatFact, setSingleCatFact] = useState({});

    async function fetchSingleCatFact() {
        try {
            const response = await axios.get(`https://cat-fact.herokuapp.com/facts`);
            setSingleCatFact(response.data[{object}].text);
        } catch (e) {
            console.error(e);
        }
    }

    //function call
    useEffect(()=>{
        fetchSingleCatFact();
    }, []);

    return (
        <>
            <ul>
                {singleCatFact.map((singleCatFact) => {
                    return (
                        <Cat object={0}/>
                    )
                })}
            </ul>
        </>
    )
}

export default Cat;