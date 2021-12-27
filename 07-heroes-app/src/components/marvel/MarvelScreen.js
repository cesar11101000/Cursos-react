import React from 'react'
import { HeroList } from '../heroes/HeroList'
import { SearchScreen } from '../search/SearchScreen'

export const MarvelScreen = () => {
    return (
        <div>
            <h1>marvel Screen</h1>
            <HeroList publisher='Marvel Comics'/>
        </div>
    )
}
