import React from 'react'
import { integrates } from '../data/integrantes'
import { CharactersCards } from './CharactersCards'

export const CharactersList = () => {

    return(

        <div className="card-columns animate__animated animate__fadeIn row">
            {
                integrates.map( char => (
                    <CharactersCards 
                        key={ char.nombre }
                        { ...char }
                    />
                ))
            }
        </div>)
}
