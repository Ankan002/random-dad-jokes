import React, {useEffect} from 'react'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { jokeState } from '../atom/jokeAtom'
import {loadingState} from '../atom/loadingAtom'

const FetchButton = () => {

    const [joke, setJoke] = useRecoilState(jokeState)
    const [loading, setLoading] = useRecoilState(loadingState)

    const getJokeFromAPI = async () => {
        setLoading(true)
        try {
            const response = await axios.get('https://icanhazdadjoke.com/', {
                headers: {
                    'Accept' : 'application/json'
                }
            });
            setJoke(response.data.joke)
            setLoading(false)
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        getJokeFromAPI()
    }, [])

    const onGetJokeButtonClick = () => {
        if(loading) return

        getJokeFromAPI()
    }

    return (
        <div>
            <button type="button" className="btn btn-danger text-warning" onClick={onGetJokeButtonClick}>
                New Joke
            </button>
        </div>
    )
}

export default FetchButton
