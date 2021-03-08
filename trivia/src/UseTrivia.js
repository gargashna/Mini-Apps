import { useState, useEffect, useCallback } from 'react';

export default function UseTrivia() {

    const [question, setQuestion] = useState(null);
    const [category, setCategory] = useState('any');

    const getQuestion = useCallback(() => {

        let apiUrl = 'https://opentdb.com/api.php?amount=1';
        if (category !== 'any') apiUrl += `&category=${category}`
        // console.log(apiUrl)
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                //console.log(data.results[0]);
                setQuestion(data.results[0]);

            })

    }, [category])


    useEffect(() => {
        getQuestion()
    }, [getQuestion, category]);

    return { question, category, setCategory, getQuestion }
}