import React from 'react'
import { useRecoilState } from 'recoil'
import { jokeState } from '../atom/jokeAtom'
import {loadingState} from '../atom/loadingAtom'
import Loading from './Loading'

const JokeSection = () => {

    const [joke, setJoke] = useRecoilState(jokeState)
    const [loading, setLoading] = useRecoilState(loadingState)

    return (
        <div 
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h3
                style={{
                    margin: 30,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}

                className="text-info"
            >
                {
                    (loading) ? (
                        <Loading />
                    ) : (
                        <>
                            {joke}
                        </>
                    )
                }
            </h3>
        </div>
    )
}

export default JokeSection
