import { useState, useEffect} from 'react';
import API_KEY from "./Keys";

const CONTEXT_KEY = "33a54af10af4d46e5";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}
                &cx=${CONTEXT_KEY}&g=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }

        fetchData();
    }, [term])

    return { data }
};

export default useGoogleSearch;
